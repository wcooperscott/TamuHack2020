import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggagePage } from './baggage.page';

const routes: Routes = [
  {
    path: '',
    component: BaggagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaggagePageRoutingModule {}
