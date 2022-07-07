export class FunctionalitySystemStatus {
  identifier: string; // e.g. "v1.endpoint.solving-service#pddl4j"
  displayTitle: string; // e.g. "Modelling Service"
  status: string;
  infoText?: string;
  connectedSince?: Date;
}

export interface FunctionalityGroup {
  name: string // e.g. "Endpoint Functionalities"
  functionalities: FunctionalitySystemStatus[]
}

export interface SystemStatus {
  functionalityGroups: FunctionalityGroup[]
}
