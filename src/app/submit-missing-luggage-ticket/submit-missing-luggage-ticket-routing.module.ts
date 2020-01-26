import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitMissingLuggageTicketPage } from './submit-missing-luggage-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitMissingLuggageTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitMissingLuggageTicketPageRoutingModule {}
