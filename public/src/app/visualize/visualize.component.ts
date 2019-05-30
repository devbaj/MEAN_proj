import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { D3Service } from '../d3/d3.service';
import { UserMgmtService } from '../user-mgmt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    public _d3Service: D3Service,
    private _userMgmtSerivce: UserMgmtService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userMgmtSerivce.checkUser()
    if (this._userMgmtSerivce.loggedIn) {
      // get user data
    } else {
      this._userMgmtSerivce.illegalAction = true;
      this._router.navigate(['login']);
    }
  }

}
