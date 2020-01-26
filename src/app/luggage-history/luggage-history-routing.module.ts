import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuggageHistoryPage } from './luggage-history.page';

const routes: Routes = [
  {
    path: '',
    component: LuggageHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuggageHistoryPageRoutingModule {}
