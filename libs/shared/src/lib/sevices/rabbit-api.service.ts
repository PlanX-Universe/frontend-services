import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/planx-frontend/src/environments/environment';

@Injectable()
export class RabbitApiService {


  private baseUrl: string = environment.managingServiceREST;

  constructor(private readonly http: HttpClient) {
  }

  public getFunctionalities(): Observable<FunctionalityStatus[]> {
    return this.http.get<FunctionalityStatus[]>(`${this.baseUrl}/v1/managing/functionalities`).pipe(
      // TODO: add error handling
    );
  }
}

export class FunctionalityStatus {
  name = '';
  health: { status: string };
  connectedAt?: Date = null;
}
