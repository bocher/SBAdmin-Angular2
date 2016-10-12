import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginRoutes } from './login/login.routing';
import { LoginService } from './login/login.service';
import { WebComponent } from './web/web.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const webRoutes: Routes = [
  {
    path: '',
    component: WebComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [LoginService]
  }
];

const appRoutes: Routes = [
  ...webRoutes,
  ...loginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class SBAdminAnglarRoutingModule { }
