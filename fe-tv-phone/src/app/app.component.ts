import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiHeaderComponent } from '../libs/ui/ui-header/ui-header.component';
import { UiJoystickComponent } from '../libs/ui/ui-joystick/ui-joystick.component';
import { WebsocketConnectionService } from '../libs/services/websocket-connection/websocket-connection.service';
import { UiClickComponent } from '../libs/ui/ui-click/ui-click.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiHeaderComponent, UiJoystickComponent, UiClickComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-tv-phone';
}
