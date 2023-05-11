export interface Plan {
  cost: number
  actions: Action[]
}

export interface Action {
  name: string,
  parameters: string[],
  instantiations: string[],
  cost: number,
  duration: number,
  momentInTime: number,
}

export enum PlanType {
  Sequential = "sequential",
  Parallel = "parallel"
}

export class SequentialPlan implements Plan {
  actions: PlanXAction[];
  cost: number;
}

export class PlanXAction implements Action {
  constructor(
    public name: string,
    public parameters: string[],
    public instantiations: string[],
    public cost: number,
    public duration: number,
    public momentInTime: number,
    public preconditions?: any[],
    public effects?: any[]
  ) {
  }
}
