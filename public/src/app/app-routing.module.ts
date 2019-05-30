import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reg',
    component: RegisterComponent
  },
  {
    path: 'settings',
    component: UserSettingsComponent
  },
  {
    path: 'data',
    component: DataEntryComponent
  },
  {
    path: 'visualize',
    component: VisualizeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
