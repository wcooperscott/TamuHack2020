import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuggageHistoryPage } from './luggage-history.page';

describe('LuggageHistoryPage', () => {
  let component: LuggageHistoryPage;
  let fixture: ComponentFixture<LuggageHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuggageHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuggageHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
