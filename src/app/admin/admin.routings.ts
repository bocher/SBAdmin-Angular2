import { ModuleWithProviders } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleFormComponent } from './form/form.component';
import { TablesComponent } from './tables/tables.component';
import { SampleChartsComponent } from './charts/charts.component';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [LoginService],
        children: [
            {
                path: '',
                canActivateChild: [LoginService],
                children: [
                    { path: '', component: DashboardComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'forms', component: SampleFormComponent },
                    { path: 'tables', component: TablesComponent },
                    { path: 'charts', component: SampleChartsComponent },
                    { path: 'bcomponent', component: BcomponentComponent },
                    { path: 'logout', component: LoginComponent, data: { login: false } },
                ]
            }
        ]
    },

];

export const ADMIN_ROUTES: ModuleWithProviders = RouterModule.forChild(adminRoutes);