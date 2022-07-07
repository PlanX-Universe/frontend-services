import { SequentialPlan } from '@planx-planning/plan';

export interface RequestJsonPayload {
  requestId: string;
}

export interface PlanningResultsJsonResponse {
  content: SequentialPlan;
  error: PlanXError;
}

export interface PlanXError {
  origin: string
  errorMessage: string
  stackTrace?: string[]
}
