import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { UserMgmtService } from '../user-mgmt.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  userid: string;

  constructor(
    private _httpService: HttpService,
    private _userMgmtService: UserMgmtService,
    public _router: Router
  ) { }

  ngOnInit() {
    this._userMgmtService.checkUser();
    this.userid = this._userMgmtService.getId();
  }

}
