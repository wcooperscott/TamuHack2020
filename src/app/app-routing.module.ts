import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiceResolverService } from './services/service-resolver.service';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'baggage',
    loadChildren: () => import('./baggage/baggage.module').then( m => m.BaggagePageModule)
  },
  {
    path: 'luggage-history/:id',
    loadChildren: () => import('./luggage-history/luggage-history.module').then( m => m.LuggageHistoryPageModule),
    resolve: {
      special: ServiceResolverService
    }
  },
  {
    path: 'submit-missing-luggage-ticket/:id',
    loadChildren: () => import('./submit-missing-luggage-ticket/submit-missing-luggage-ticket.module').then( m => m.SubmitMissingLuggageTicketPageModule),
    resolve: {
      special: ServiceResolverService
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
