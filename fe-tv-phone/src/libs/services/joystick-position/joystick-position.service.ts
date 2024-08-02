import { inject, Injectable, signal } from '@angular/core';
import { WebsocketConnectionService } from '../websocket-connection/websocket-connection.service';


export interface PositionVector {
  x: number,
  y: number,
}


@Injectable({
  providedIn: 'root'
})
export class JoystickPositionService {
  private positionSignal = signal<PositionVector>({ x: 0, y: 0 })
  private readonly websocketConnectionService = inject(WebsocketConnectionService)
  getPosition() {
    return this.positionSignal
  }

  updatePosition(values: PositionVector) {
    this.websocketConnectionService.send(values)
    this.positionSignal.set(values)
  }

}
