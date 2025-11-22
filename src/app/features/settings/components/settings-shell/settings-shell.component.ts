import { Component } from '@angular/core';
import { Tab } from '../../../../shared/components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-settings-shell',
  templateUrl: './settings-shell.component.html',
  styleUrls: ['./settings-shell.component.scss']
})
export class SettingsShellComponent {
  tabs: Tab[] = [
    { label: 'Personal Settings', route: '/settings/personal' },
    { label: 'General Settings', route: '/settings/general' }
  ];
}
