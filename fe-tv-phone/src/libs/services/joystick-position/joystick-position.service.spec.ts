import { TestBed } from '@angular/core/testing';

import { JoystickPositionService } from './joystick-position.service';

describe('JoystickPositionService', () => {
  let service: JoystickPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoystickPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
