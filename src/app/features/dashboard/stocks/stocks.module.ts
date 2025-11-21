import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksRoutingModule } from './stocks-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { StocksShellComponent } from './components/stocks-shell/stocks-shell.component';
import { TradeComponent } from './components/trade/trade.component';
import { LiveComponent } from './components/live/live.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

@NgModule({
  declarations: [
    StocksShellComponent,
    TradeComponent,
    LiveComponent,
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
