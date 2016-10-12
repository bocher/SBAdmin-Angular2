import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  version: string = "0.1";
  isLoggedIn: boolean = false;
  redirectUrl: string = "";

  constructor() {
    console.log(" #AppService# ");
  }

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
