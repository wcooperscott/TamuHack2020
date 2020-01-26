import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitMissingLuggageTicketPageRoutingModule } from './submit-missing-luggage-ticket-routing.module';

import { SubmitMissingLuggageTicketPage } from './submit-missing-luggage-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitMissingLuggageTicketPageRoutingModule
  ],
  declarations: [SubmitMissingLuggageTicketPage]
})
export class SubmitMissingLuggageTicketPageModule {}
