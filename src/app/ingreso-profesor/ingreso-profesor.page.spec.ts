import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoProfesorPage } from './ingreso-profesor.page';

describe('IngresoProfesorPage', () => {
  let component: IngresoProfesorPage;
  let fixture: ComponentFixture<IngresoProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
