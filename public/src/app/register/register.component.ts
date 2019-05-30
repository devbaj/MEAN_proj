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
  newUser = {
  };
  pwMatch: boolean;
  emailDupe: boolean

  constructor(
    private _httpService: HttpService
  ) {
    this.pwMatch = true;
    this.emailDupe = false;
  }

  ngOnInit() {
  }

  checkDupes(email: string): void {
    let observable = this._httpService.checkDupes('email', email);
    observable.subscribe( res => {
      if (res[`dupe`]) { this.emailDupe = true; }
    });
  }

  checkPwMatch(): void {
    if (this.pw !== this.pwConf && this.pwConf.length > 6) {
      this.pwMatch = false;
    }
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

      });
    } else if (this.emailDupe) {
      console.log('email already taken') // TODO: user error messaging
    } else if (this.pw !== this.pwConf) {
      this.pwMatch = false;
      console.log()
    }
  }

}
