import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  pw: string;
  pwConf: string;
  newUser = {};
  pwMatch: boolean;
  emailDupe: boolean;
  timeout: any;

  constructor(
    private _httpService: HttpService
  ) {
    this.pwMatch = true;
    this.emailDupe = false;
    this.timeout = null;
  }

  ngOnInit() {
  }

  checkDupes(email: string): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      let observable = this._httpService.checkDupes('email', email);
      observable.subscribe( res => {
        if (res[`success`] && res[`dupe`]) {
          this.emailDupe = true;
          console.log('')
        } else if (!res[`success`]) { console.log('error', res[`error`]); }
      });
    }, 500);
  }

  checkPwMatch(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      if (this.pw !== this.pwConf && this.pwConf.length > 6) {
        this.pwMatch = false;
      }
    }, 1000);
  }

  submit(): void {
    if (this.pwMatch && !this.emailDupe) {
      this.newUser = {
        firstName: this.fname,
        lastName: this.lname,
        email: this.email,
        password: this.pw
      };
      let observable = this._httpService.createUser(this.newUser);
      observable.subscribe( res => {
        console.log(res);
      });
    } else if (this.emailDupe) {
      console.log('email already taken'); // TODO: user error messaging
    } else if (this.pw !== this.pwConf) {
      this.pwMatch = false;
      console.log('pw are different');
    }
  }

}
