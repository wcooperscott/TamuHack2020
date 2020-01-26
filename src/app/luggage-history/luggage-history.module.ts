import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuggageHistoryPageRoutingModule } from './luggage-history-routing.module';

import { LuggageHistoryPage } from './luggage-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuggageHistoryPageRoutingModule
  ],
  declarations: [LuggageHistoryPage]
})
export class LuggageHistoryPageModule {}
