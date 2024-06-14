import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { WorkplaceComponent } from './components/workplace/workplace.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', children:
    [
      { path: 'monitor', component: MonitorComponent },
      { path: 'workplace', component: WorkplaceComponent },
    ] 
  },
];