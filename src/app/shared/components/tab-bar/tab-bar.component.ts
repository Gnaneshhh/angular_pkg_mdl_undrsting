import { Component, Input } from '@angular/core';

export interface Tab {
  label: string;
  route: string;
}

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent {
  @Input() tabs: Tab[] = [];
}
