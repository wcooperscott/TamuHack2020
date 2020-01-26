import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitMissingLuggageTicketPage } from './submit-missing-luggage-ticket.page';

describe('SubmitMissingLuggageTicketPage', () => {
  let component: SubmitMissingLuggageTicketPage;
  let fixture: ComponentFixture<SubmitMissingLuggageTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitMissingLuggageTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitMissingLuggageTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
