import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'dashboard', component:DashboardComponent, pathMatch:'full'},
    {path:'login', component:LoginComponent, pathMatch:'full'},
    {path:'register', component:RegisterComponent, pathMatch:'full'},
    // { path: '', redirectTo: 'login', pathMatch: 'full' }
];
