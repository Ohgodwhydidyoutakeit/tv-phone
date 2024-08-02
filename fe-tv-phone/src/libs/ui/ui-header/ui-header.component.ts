import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiConnectionStateComponent } from '../ui-connection/ui-connection.component';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [UiConnectionStateComponent],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.scss'
})
export class UiHeaderComponent {
}
