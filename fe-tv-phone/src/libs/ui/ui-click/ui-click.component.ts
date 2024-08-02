import { Component, inject } from '@angular/core';
import { WebsocketConnectionService } from '../../services/websocket-connection/websocket-connection.service';

@Component({
  selector: 'ui-click',
  standalone: true,
  imports: [],
  templateUrl: './ui-click.component.html',
  styleUrl: './ui-click.component.scss'
})
export class UiClickComponent {

  private readonly websocketService = inject(WebsocketConnectionService)

  handleClick($event: MouseEvent): void {

    console.log("Clicked")
    this.websocketService.sendClick()
  }

}
