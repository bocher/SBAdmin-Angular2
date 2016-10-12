import { Routes } from '@angular/router';
import { LoginService } from './login.service';

import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];
