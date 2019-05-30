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
      if (res[`success`]) { localStorage.setItem('userid', res[`payload`][`id`]); } else { console.log('error', res[`error`]); }
    });
  }

}
