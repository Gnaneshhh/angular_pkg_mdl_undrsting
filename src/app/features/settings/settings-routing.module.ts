import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsShellComponent } from './components/settings-shell/settings-shell.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsShellComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalSettingsComponent },
      { path: 'general', component: GeneralSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
