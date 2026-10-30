import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaTickets } from './reserva-tickets';

describe('ReservaTickets', () => {
  let component: ReservaTickets;
  let fixture: ComponentFixture<ReservaTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaTickets],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
