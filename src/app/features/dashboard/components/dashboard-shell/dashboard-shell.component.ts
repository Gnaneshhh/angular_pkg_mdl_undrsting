import { Component } from '@angular/core';
import { Tab } from '../../../../shared/components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.scss']
})
export class DashboardShellComponent {
  tabs: Tab[] = [
    { label: 'Home', route: '/dashboard/home' },
    { label: 'Stocks', route: '/dashboard/stocks' }
  ];
}
