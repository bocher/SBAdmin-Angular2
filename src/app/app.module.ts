import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { WebModule } from './web/web.module';
import { SBAdminAnglarRoutingModule } from './app-routing.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SBAdminAnglarRoutingModule,
    AdminModule,
    LoginModule,
    WebModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
