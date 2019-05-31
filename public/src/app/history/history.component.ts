import { Component, OnInit } from '@angular/core';
import { UserMgmtService } from '../user-mgmt.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  userid: string;
  user: any;

  constructor(
    private _userMgmtService: UserMgmtService,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._userMgmtService.checkUser();
    this.userid = this._userMgmtService.getId();
    let observable = this._httpService.getUserInfo(this.userid);
    observable.subscribe( res => {
      this.user = res[`payload`];
      console.log('response', res);
    })
  }

}
