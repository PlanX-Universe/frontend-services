import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { environment } from 'apps/planx-frontend/src/environments/environment';
import { filter, finalize, map, tap } from 'rxjs/operators';
import { RequestJsonPayload } from '@planx-planning/plan';
import { NotificationService } from '@planx-planning/shared';

@Injectable()
export class WebsocketService {
  private readonly _isConnected$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private readonly options = {
    connectionTimeout: 1000,
    minReconnectionDelay: 5000,
    maxReconnectionDelay: 1000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 100
  };

  private socket;
  private baseUrl = `${environment.managingServiceWS}/v1`;

  constructor(private readonly notificationService: NotificationService) {
  }

  /**
   * For a given requestId, the MessageEvent is returned
   * @param requestId of type string
   */
  public createWebsocket(requestId: string): Observable<MessageEvent> {
    this.socket = new ReconnectingWebSocket(`${this.baseUrl}/websocket`, [], this.options);

    const socket$: Observable<MessageEvent> = new Observable(
      (observer: Observer<MessageEvent>) => {
        this.socket.onmessage = observer.next.bind(observer);
        this.socket.onopen = observer.next.bind(observer);
        this.socket.onerror = observer.error.bind(observer);
        this.socket.onclose = observer.complete.bind(observer);
        return this.socket.close.bind(this.socket);
      }
    );

    return socket$.pipe(
      tap({
        next: (event: MessageEvent | Event) => {
          if (!(event instanceof MessageEvent)) {
            // First Connect
            const initPayload: RequestJsonPayload = {
              requestId
            };
            this.sendJsonPayload(initPayload);
            this._isConnected$.next(true);
          }
        },
        error: e => {
          this.notificationService.error('Failed to receive a plan');
          console.error(e);
        }
      }),
      filter((event) => event instanceof MessageEvent),
      map(event => event as MessageEvent),
      finalize(() => {
        this._isConnected$.next(false);
        this.socket.reconnect();
      })
    );
  }

  /**
   * For a given requestJsonPayload, the socket send the payload
   * @param requestJsonPayload
   */
  private sendJsonPayload(requestJsonPayload: RequestJsonPayload): void {
    this.socket?.send(JSON.stringify(requestJsonPayload));
  }

  /**
   * Closes connection to Websocket
   */
  public disconnect(): void {
    if (this._isConnected$?.getValue()) {
      this.socket?.close();
      this._isConnected$.next(false);
      console.log('Socket disconnected');
    }
  }

  public get isConnected$() {
    return this._isConnected$.asObservable();
  }
}


