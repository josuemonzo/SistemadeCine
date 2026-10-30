import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearClasificacion } from './crear-clasificacion';

describe('CrearClasificacion', () => {
  let component: CrearClasificacion;
  let fixture: ComponentFixture<CrearClasificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearClasificacion],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearClasificacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
