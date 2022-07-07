import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FunctionalityGroup, FunctionalitySystemStatus, SystemStatus } from '../models';
import { map } from 'rxjs/operators';
import { FunctionalityStatus, RabbitApiService } from '@planx-planning/shared';

@Injectable()
export class SystemStatusService {

  constructor(private readonly rabbitApiService: RabbitApiService) {
  }

  private static isLeafNode(fullNodeKey: string): boolean {
    return fullNodeKey.split('.').length === 3;
  }

  private static FunctionalityAndKey(input: string): { route: string, key: string } {
    const splittedString = input.split('#');
    return { route: splittedString[0], key: splittedString[1] };
  }

  public getSystemStatus(): Observable<SystemStatus> {
    return this.rabbitApiService.getFunctionalities().pipe(
      map((functionalityStatus: FunctionalityStatus[]): FunctionalityStatus[] => {
        // add SELF
        functionalityStatus.push({
            ...new FunctionalityStatus(),
            name: 'v1.endpoint.modelling-service#prototype',
            health: { status: 'running' },
            connectedAt: new Date(Date.now())
          }
        );
        return functionalityStatus;
      }),
      map((functionalityStatusList: FunctionalityStatus[]): FunctionalityStatus[] =>
        // filter for NOT default connections
        functionalityStatusList.filter(c => !c?.name?.startsWith('rabbitConnectionFactory'))),
      map((functionalityStatus): SystemStatus => {
        const systemStatus: SystemStatus = {
          functionalityGroups: new Array<FunctionalityGroup>()
        } as SystemStatus;

        const routes = new Array<{ key: string, value: any }>();
        functionalityStatus.forEach(x => {
          const { route, key }: { route: string, key: string } = SystemStatusService.FunctionalityAndKey(x.name);
          routes.push({ key: route, value: x });
        });
        const routeTree = this.nameToTree(routes);
        console.log(routeTree);

        for (const version of routeTree?.children) {
          systemStatus.functionalityGroups = new Array<FunctionalityGroup>();
          for (const type of version?.children) {
            const functionalities = new Array<FunctionalitySystemStatus>();
            for (const functionality of type?.children) {
              functionalities.push({
                ...new FunctionalitySystemStatus(),
                displayTitle: functionality.label,
                status: functionality?.obj?.health?.status,
                connectedSince: new Date(functionality?.obj?.connectedAt),
                identifier: functionality.fullLabel
              });
            }
            systemStatus.functionalityGroups.push({
              name: type.label,
              functionalities: functionalities
            } as FunctionalityGroup);
          }
        }
        return systemStatus;
      })
    );
  }

  private nameToTree(input: { key: string, value: FunctionalityStatus }[]): { label: string, children: any[] } {
    const mapper = {};
    const tree = {
      label: 'root',
      children: []
    };

    for (const { key, value } of input) {
      const splits = key.split('.');
      let label = '';
      let fullLabel = '';

      splits.reduce((parent, name) => {
        label = name;

        if (fullLabel)
          fullLabel += `.${label}`;
        else
          fullLabel = label;

        if (!mapper[fullLabel]) {
          let o;
          // if leaf node
          if (SystemStatusService.isLeafNode(fullLabel)) {
            const routingKey: string = SystemStatusService.FunctionalityAndKey(value.name).key;
            o = {
              label,
              fullLabel: `${fullLabel}#${routingKey}`,
              obj: value
            };
          } else {
            o = {
              label
            };
          }

          mapper[fullLabel] = o;
          parent.children = parent.children || [];
          parent.children.push(o);
        }


        // console.log(parent, name, fullLabel, mapper[label]);
        return mapper[fullLabel];
      }, tree);
    }

    return tree;
  }
}
