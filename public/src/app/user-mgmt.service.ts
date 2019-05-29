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
    this.loggedIn = false;
  }

  checkUser(): boolean {
    if (localStorage.length > 0) {
      console.log('passed userid check');
      this.userid = localStorage.getItem('userid');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this._router.navigate(['home']);
  }

}
