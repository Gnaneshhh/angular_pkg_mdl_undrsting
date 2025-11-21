import { Component } from '@angular/core';
import { Tab } from '../../../../shared/components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-history-shell',
  templateUrl: './history-shell.component.html',
  styleUrls: ['./history-shell.component.scss']
})
export class HistoryShellComponent {
  tabs: Tab[] = [
    { label: 'Order History', route: '/history/orders' }
  ];
}
