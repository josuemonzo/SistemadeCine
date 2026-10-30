import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAnuncio } from './crear-anuncio';

describe('CrearAnuncio', () => {
  let component: CrearAnuncio;
  let fixture: ComponentFixture<CrearAnuncio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAnuncio],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearAnuncio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
