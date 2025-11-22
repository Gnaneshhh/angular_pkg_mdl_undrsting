import { Component } from '@angular/core';
import { Tab } from '../../../../../shared/components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-stocks-shell',
  templateUrl: './stocks-shell.component.html',
  styleUrls: ['./stocks-shell.component.scss']
})
export class StocksShellComponent {
  tabs: Tab[] = [
    { label: 'Trade', route: '/dashboard/stocks/trade' },
    { label: 'Live', route: '/dashboard/stocks/live' },
    { label: 'Watchlist', route: '/dashboard/stocks/watchlist' }
  ];
}
