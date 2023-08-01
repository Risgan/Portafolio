import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribucionesComponent } from './contribuciones.component';

describe('ContribucionesComponent', () => {
  let component: ContribucionesComponent;
  let fixture: ComponentFixture<ContribucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribucionesComponent]
    });
    fixture = TestBed.createComponent(ContribucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
