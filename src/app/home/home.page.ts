import { Component } from '@angular/core';
import { FcmService } from '../fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  token = "Getting token...";
  constructor(
    private fcm : FcmService
  ) {
    
  }

}
