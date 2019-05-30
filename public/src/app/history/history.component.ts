import { Component, OnInit } from '@angular/core';
import { UserMgmtService } from '../user-mgmt.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  userid: string;

  constructor(
    private _userMgmtService: UserMgmtService
  ) { }

  ngOnInit() {
    this._userMgmtService.checkUser();
    this.userid = this._userMgmtService.getId();
  }

}
