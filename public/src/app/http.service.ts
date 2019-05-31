import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  createUser(newUser: any): any {
    return this._http.post('api/users/new', {newUser});
  }

  checkDupes(field: string, input: string): any {
    return this._http.post('api/users/emails', {field, input});
  }

  attemptLogin(email: string, pw: string): any {
    return this._http.post('api/users/login', {email, password: pw});
  }

  setUser(userid: string): any {
    return this._http.post('', userid);
  }

  addData(userid: string, entry: any): any {
    return this._http.post('', {userid, entry});
  }

  getUserInfo(userid: string) {
    return this._http.get(`api/users/${userid}`);
  }

}
