import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoAlumnoPage } from './ingreso-alumno.page';

describe('IngresoAlumnoPage', () => {
  let component: IngresoAlumnoPage;
  let fixture: ComponentFixture<IngresoAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
