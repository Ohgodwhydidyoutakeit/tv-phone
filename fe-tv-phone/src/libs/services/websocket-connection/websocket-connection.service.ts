import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import HubConnectionState from '@microsoft/signalr'
import { WEBSOCKET_URL } from '../../tokens/websocket-url.injection-token';
import { PositionVector } from '../joystick-position/joystick-position.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketConnectionService {
  private readonly websocketUrl = inject(WEBSOCKET_URL)
  private connection!: signalR.HubConnection;

  public connectionState: WritableSignal<typeof this.connection.state | null> = signal(null)
  constructor() {
    this.startConnection();
  }


  public send(values: PositionVector): void {
    this.connection.invoke('ChangePosition', values.x, values.y)
      .catch(err => console.error(err));
  }

  public sendClick(): void {
    this.connection.invoke('Click').catch(err => console.error(err))
  }

  private setState(state: signalR.HubConnectionState): void {
    this.connectionState.set(state)
  }

  private startConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.websocketUrl)
      .build();

    this.connection
      .start()
      .then(() => {
        console.log('Connection started')
        this.setState(this.connection.state)
      })
      .catch(err => {
        console.log('Error while starting connection: ' + err)
        this.setState(this.connection.state)
      });


  }


}
