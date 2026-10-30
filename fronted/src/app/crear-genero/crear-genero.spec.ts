import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearGenero } from './crear-genero';

describe('CrearGenero', () => {
  let component: CrearGenero;
  let fixture: ComponentFixture<CrearGenero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearGenero],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearGenero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
