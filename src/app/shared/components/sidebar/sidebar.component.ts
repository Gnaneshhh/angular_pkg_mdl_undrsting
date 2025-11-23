import { Component } from '@angular/core';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'History', route: '/history' },
    { label: 'Settings', route: '/settings' }
  ];

}
