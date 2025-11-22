import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardShellComponent } from './components/dashboard-shell/dashboard-shell.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,   /// so this is the shell one we are displaying ok?
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // defaultt
      { path: 'home', component: DashboardHomeComponent },
      {
        path: 'stocks',
        loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
