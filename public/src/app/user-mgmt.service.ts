import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserMgmtService {
  userid: string;
  illegalAction: boolean;
  loggedIn: boolean;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) {
    this.illegalAction = false;
    this.loggedIn = true;
  }

  logInUser(userid: string) {
    localStorage.setItem('userid', userid);
    this.loggedIn = true;
  }

  getId() {
    if (this.loggedIn) {
      this.userid = localStorage.getItem('userid');
      return this.userid;
    } else {
      this.checkUser();
    }
  }

  checkUser() {
    if (this.loggedIn) {
      console.log('passed userid check');
      this.userid = localStorage.getItem('userid');
      this.illegalAction = false;
    } else {
      this.illegalAction = true;
      this._router.navigate(['login']);
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this._router.navigate(['home']);
  }

}
