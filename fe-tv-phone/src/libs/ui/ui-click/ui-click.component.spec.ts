import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiClickComponent } from './ui-click.component';

describe('UiClickComponent', () => {
  let component: UiClickComponent;
  let fixture: ComponentFixture<UiClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
