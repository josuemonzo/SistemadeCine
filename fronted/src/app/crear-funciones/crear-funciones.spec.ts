import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearFunciones } from './crear-funciones';

describe('CrearFunciones', () => {
  let component: CrearFunciones;
  let fixture: ComponentFixture<CrearFunciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFunciones],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearFunciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
