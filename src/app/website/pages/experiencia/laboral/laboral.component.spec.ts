import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralComponent } from './laboral.component';

describe('LaboralComponent', () => {
  let component: LaboralComponent;
  let fixture: ComponentFixture<LaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboralComponent]
    });
    fixture = TestBed.createComponent(LaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
