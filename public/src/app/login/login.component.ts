import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { UserMgmtService } from '../user-mgmt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pw: string;
  warn: boolean;

  constructor(
    private _httpService: HttpService,
    private _userMgmtService: UserMgmtService
  ) {
    this.warn = false;
  }

  ngOnInit() {
    if (this._userMgmtService.illegalAction) {
      this.warn = true;
    }
  }

  attemptLogin() {
    let observable = this._httpService.attemptLogin(this.email, this.pw)
    observable.subscribe( (res: any) => {
      if (res[`success`]) {
        console.log('response', res);
        this._userMgmtService.logInUser(res[`payload`][`userid`]);
        console.log('user logged in with id', res[`payload`][`userid`]);
      } else { console.log('error', res[`error`]); }
    });
  }

}
