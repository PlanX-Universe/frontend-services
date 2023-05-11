import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'apps/planx-frontend/src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class SolvingService {

  private baseUrl = `${environment.managingServiceREST}/v1`;

  constructor(private readonly http: HttpClient) {
  }

  public requestSolvingByDomainAndProblem(domain: string, problem: string,
                                          language: string, planner: string
  ): Observable<string> {
    /**
     * Encode domain and plan using base64
     *
     * WindowOrWorkerGlobalScope.btoa() method creates a base-64 encoded
     */
    domain = btoa(domain);
    problem = btoa(problem);

    const body: SolvingRequestBody = {
      requestId: uuidv4(),
      domain,
      problem,
      planner,
      language: language.toUpperCase()
    };
    return this.http.post<SolvingRequestResponseBody>(`${this.baseUrl}/managing/solving`, body, {
      responseType: 'json'
    }).pipe(
      map((response: SolvingRequestResponseBody): string => response.requestId)
    );
  }
}

interface SolvingRequestBody {
  requestId: string;
  domain: string;
  problem: string;
  planner: string;
  language: string;
}

interface SolvingRequestResponseBody {
  requestId: string
}
