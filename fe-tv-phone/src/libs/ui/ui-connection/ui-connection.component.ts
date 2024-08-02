import { isPlatformBrowser, NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
// import { SignalService } from '../signal.service';
import { from, fromEvent, map, Observable, switchMap, takeUntil } from 'rxjs';
import { JoystickPositionService, PositionVector } from '../../services/joystick-position/joystick-position.service';
import { WebsocketConnectionService } from '../../services/websocket-connection/websocket-connection.service';


@Component({
  selector: 'ui-connection-state',
  templateUrl: './ui-connection.component.html',
  styleUrls: ['./ui-connection.component.scss'],
  standalone: true,
})
export class UiConnectionStateComponent {

  readonly connectionState = inject(WebsocketConnectionService).connectionState;






}
