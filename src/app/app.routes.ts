import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'dashboard', component:DashboardComponent, pathMatch:'full'},
    {path:'login', component:LoginComponent, pathMatch:'full'},
    // { path: '', redirectTo: 'login', pathMatch: 'full' }
];
