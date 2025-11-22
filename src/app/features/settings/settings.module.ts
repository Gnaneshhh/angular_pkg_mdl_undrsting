import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SettingsShellComponent } from './components/settings-shell/settings-shell.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

@NgModule({
  declarations: [
    SettingsShellComponent,
    PersonalSettingsComponent,
    GeneralSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
