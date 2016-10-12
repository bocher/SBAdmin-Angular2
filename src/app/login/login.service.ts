import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AppService } from '../app.service';

const API_LOGIN_URL = "./assets/dummy/login.json";
@Injectable()
export class LoginService {

  constructor(private http: Http,
    private appService: AppService,
    private router: Router) {
    console.info(" #LoginService# ");
  }

  login(body) {
    return this.http.get(API_LOGIN_URL, body) // TODO: change http.post
      .map(response => {
        let body = response.json();
        console.log(body);
        return body || {};
      }) // {result:OK | NG}
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Login Service error');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("### canActivate ### URL:" + url);
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.info("### canActivateChild ### URL:" + state.url);
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    console.info("### canLoad ### URL:" + url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.info("### checkLogin ### URL: " + url);
    if (this.appService.isLoggedIn) {
      return true;
    }
    this.appService.redirectUrl = url;
    this.router.navigate(['login']);
    return false;
  }

}
