import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryShellComponent } from './components/history-shell/history-shell.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryShellComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: OrderHistoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
