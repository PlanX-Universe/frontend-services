import { Component, OnInit } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'planx-planning-system-functionality-graph',
  templateUrl: './system-functionality-graph.component.html',
  styleUrls: ['./system-functionality-graph.component.scss']
})
export class SystemFunctionalityGraphComponent implements OnInit {
  readonly links: Edge[] = [
    {
      id: 'versionLink',
      source: 'mom',
      target: 'version',
      label: 'has version'
    },
    {
      id: 'endpointLink',
      source: 'version',
      target: 'v1.endpoint'
    },
    {
      id: 'routerLink',
      source: 'version',
      target: 'v1.router'
    }, {
      id: 'managingLink',
      source: 'v1.router',
      target: 'v1.router.managing'
    },
    {
      id: 'transformingLink',
      source: 'version',
      target: 'v1.transforming'
    }, {
      id: 'monitoringLink',
      source: 'version',
      target: 'v1.monitoring'
    },
    {
      id: 'solvingLink',
      source: 'v1.endpoint',
      target: 'v1.endpoint.solving'
    },
    {
      id: 'modellingLink',
      source: 'v1.endpoint',
      target: 'v1.endpoint.modelling'
    },
    {
      id: 'parsingLink',
      source: 'v1.transforming',
      target: 'v1.transforming.parsing'
    },
    {
      id: 'convertingLink',
      source: 'v1.transforming',
      target: 'v1.transforming.converting'
    },
    {
      id: 'v1.router.managing#toolboxLink',
      source: 'v1.router.managing',
      target: 'v1.router.managing#toolbox',
      label: 'instance'
    },
    {
      id: 'v1.endpoint.solving#pddl4jLink',
      source: 'v1.endpoint.solving',
      target: 'v1.endpoint.solving#pddl4j',
      label: 'instance'
    },
    {
      id: 'v1.transforming.converting#pddl4j-encodingLink',
      source: 'v1.transforming.converting',
      target: 'v1.transforming.converting#pddl4j-encoding',
      label: 'instance'
    },
    {
      id: 'v1.transforming.parsing#pddl4jLink',
      source: 'v1.transforming.parsing',
      target: 'v1.transforming.parsing#pddl4j',
      label: 'instance'
    },
    {
      id: 'v1.transforming.parsing#jshop2Link',
      source: 'v1.transforming.parsing',
      target: 'v1.transforming.parsing#jshop2',
      label: 'instance'
    },
    {
      id: 'v1.transforming.parsing#panda3Link',
      source: 'v1.transforming.parsing',
      target: 'v1.transforming.parsing#panda3',
      label: 'instance'
    },
    {
      id: 'v1.endpoint.modelling#toolboxLink',
      source: 'v1.endpoint.modelling',
      target: 'v1.endpoint.modelling#toolbox',
      label: 'instance'
    }
  ];
  readonly nodes: Node[] = [
    {
      id: 'mom',
      label: 'Message Broker'
    },
    {
      id: 'version',
      label: 'v1'
    },
    {
      id: 'v1.endpoint',
      label: 'endpoint'
    },
    {
      id: 'v1.transforming',
      label: 'transforming'
    },
    {
      id: 'v1.transforming.parsing',
      label: 'parsing'
    },
    {
      id: 'v1.endpoint.solving',
      label: 'solving'
    },
    {
      id: 'v1.endpoint.modelling',
      label: 'modelling'
    },
    {
      id: 'v1.transforming.converting',
      label: 'converting'
    },
    {
      id: 'v1.router.managing',
      label: 'managing'
    },
    {
      id: 'v1.router',
      label: 'router'
    },
    {
      id: 'v1.monitoring',
      label: 'monitoring'
    },
    {
      id: 'v1.router.managing#toolbox',
      label: 'PlanX'
    },
    {
      id: 'v1.endpoint.solving#pddl4j',
      label: 'PDDL4J'
    },
    {
      id: 'v1.transforming.converting#pddl4j-encoding',
      label: 'PDDL4J encoding'
    },
    {
      id: 'v1.transforming.parsing#pddl4j',
      label: 'PDDL4J'
    },
    {
      id: 'v1.transforming.parsing#jshop2',
      label: 'JSHOP2'
    },
    {
      id: 'v1.transforming.parsing#panda3',
      label: 'Panda3'
    },
    {
      id: 'v1.endpoint.modelling#toolbox',
      label: 'Planx',
    }
  ];
  readonly clusters: ClusterNode[] = [
    {
      id: 'services',
      label: 'Services',
      childNodeIds: [
        'v1.router.managing#toolbox',
        'v1.endpoint.modelling#toolbox',
        'v1.transforming.parsing#panda3',
        'v1.transforming.parsing#jshop2',
        'v1.transforming.parsing#pddl4j',
        'v1.transforming.converting#pddl4j-encoding',
        'v1.endpoint.solving#pddl4j'
      ]
    },
    {
      id: 'functionalities',
      label: 'functionality',
      childNodeIds: [
        'v1.router.managing',
        'v1.endpoint.modelling',
        'v1.transforming.parsing',
        'v1.transforming.converting',
        'v1.endpoint.solving'
      ]
    },
    {
      id: 'classifications',
      label: 'Class',
      childNodeIds: [
        'v1.router',
        'v1.endpoint',
        'v1.transforming',
        'v1.monitoring'
      ]
    }
  ];
  // zoomToFit$: any;
  // update$: any;
  // center$: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
