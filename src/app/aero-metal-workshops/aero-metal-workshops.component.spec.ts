import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroMetalWorkshopsComponent } from './aero-metal-workshops.component';

describe('AeroMetalWorkshopsComponent', () => {
  let component: AeroMetalWorkshopsComponent;
  let fixture: ComponentFixture<AeroMetalWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeroMetalWorkshopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeroMetalWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
