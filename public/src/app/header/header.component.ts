import { Component, OnInit } from '@angular/core';
import { UserMgmtService } from '../user-mgmt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _userMgmtService: UserMgmtService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this._userMgmtService.logout();
  }

}
