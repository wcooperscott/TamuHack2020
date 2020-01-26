import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaggagePageRoutingModule } from './baggage-routing.module';

import { BaggagePage } from './baggage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaggagePageRoutingModule
  ],
  declarations: [BaggagePage]
})
export class BaggagePageModule {}
