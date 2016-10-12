import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { EmailPipe, HighlightDirective } from '../shared/index';
import { LoginService } from './login.service';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AlertModule
  ],
  declarations: [LoginComponent, EmailPipe, HighlightDirective],
  providers: [LoginService]
})

export class LoginModule { }
