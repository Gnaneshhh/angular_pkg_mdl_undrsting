import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksShellComponent } from './components/stocks-shell/stocks-shell.component';
import { TradeComponent } from './components/trade/trade.component';
import { LiveComponent } from './components/live/live.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '',
    component: StocksShellComponent,
    children: [
      { path: '', redirectTo: 'trade', pathMatch: 'full' },
      { path: 'trade', component: TradeComponent },
      { path: 'live', component: LiveComponent },
      { path: 'watchlist', component: WatchlistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
