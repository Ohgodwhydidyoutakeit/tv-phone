import { isPlatformBrowser, NgStyle, DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
// import { SignalService } from '../signal.service';
import { from, fromEvent, map, Observable, switchMap, takeUntil, throttleTime } from 'rxjs';
import { JoystickPositionService, PositionVector } from '../../services/joystick-position/joystick-position.service';


@Component({
  selector: 'ui-joystick',
  templateUrl: './ui-joystick.component.html',
  styleUrls: ['./ui-joystick.component.scss'],
  standalone: true,
  imports: [NgStyle]
})
export class UiJoystickComponent implements AfterViewInit {
  @ViewChild('joystick', { static: false })
  joystick!: ElementRef;

  public position: PositionVector = { x: 0, y: 0 };

  private readonly joystickPositionService = inject(JoystickPositionService)
  private readonly document = inject(DOCUMENT)

  ngAfterViewInit(): void {
    const joystickElement = this.joystick.nativeElement;

    const pointerdown$ = fromEvent<PointerEvent>(joystickElement, 'pointerdown');
    const pointermove$ = fromEvent<PointerEvent>(this.document, 'pointermove');
    const pointerup$ = fromEvent<PointerEvent>(this.document, 'pointerup');
    const pointercancel$ = fromEvent<PointerEvent>(this.document, 'pointercancel');

    pointerdown$.pipe(
      switchMap(startEvent => {
        const startX = startEvent.clientX;
        const startY = startEvent.clientY;

        return pointermove$.pipe(
          map(moveEvent => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;
            return { x: deltaX, y: deltaY };
          }),
          takeUntil(pointerup$),
          takeUntil(pointercancel$)
        );
      }
      ),
    ).subscribe((value) => {
      this.position = value
      this.joystickPositionService.updatePosition(this.position)
    });


    pointerup$.subscribe(() => {
      this.position = {
        x: 0,
        y: 0
      }
    })
  }


}
