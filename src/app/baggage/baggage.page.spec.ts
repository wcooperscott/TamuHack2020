import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaggagePage } from './baggage.page';

describe('BaggagePage', () => {
  let component: BaggagePage;
  let fixture: ComponentFixture<BaggagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaggagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
