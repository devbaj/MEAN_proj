import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pw: string;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  attemptLogin() {
    let observable = this._httpService.attemptLogin(this.email, this.pw)
    observable.subscribe( (res: any) => {
      if (res[`success`]) { localStorage.setItem('userid', res[`payload`][`id`]); } else { console.log('error', res[`error`]); }
    });
  }

}
