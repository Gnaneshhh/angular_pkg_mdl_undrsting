import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HistoryShellComponent } from './components/history-shell/history-shell.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

@NgModule({
  declarations: [
    HistoryShellComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
