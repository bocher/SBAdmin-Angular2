import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
})

export class LoginComponent implements OnInit {
  userId: string = "";
  password: string = "";
  constructor(
    private location: Router,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private appService: AppService
  ) {
  }

  ngOnInit() {
    // router logout parameter.
    // check logout
    this.route.data.subscribe(value => {
      let d = JSON.parse(JSON.stringify(value));
      // logout
      if (d.login == false) {
        this.logout();
        return;
      }

      if (this.appService.isLoggedIn) {
        this.location.navigate(['admin']);
      }
    });
  }

  login() {
    if (this.userId != "" && this.password != "") {
      let body = { userid: this.userId, password: this.password }
      this.loginService.login(body).subscribe(response => {
        if (response.result == "OK") {
          this.appService.login();
          console.log("Redirect URL: " + this.appService.redirectUrl);
          if (
            this.appService.redirectUrl == undefined ||
            this.appService.redirectUrl == null ||
            this.appService.redirectUrl == '') {
            this.location.navigate(['admin']);
            return;
          }
          this.location.navigate([this.appService.redirectUrl]);
        }
      })
    }
  }

  logout() {
    this.appService.logout();
    this.location.navigate(['admin']);
  }


}
