import { Component, OnInit } from '@angular/core';
import { UserMgmtService } from '../user-mgmt.service';
import { HttpService } from '../http.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  userid: string;
  customer: string;
  qty: number;
  rate: number;
  discounts: [number];
  date: Date;
  expenses: number;
  revenue: number;
  crewName: string;
  crewMember: string;
  start: Time;
  end: Time;
  isValid: boolean;

  constructor(
    private _userMgmtService: UserMgmtService,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._userMgmtService.checkUser();
    this.userid = this._userMgmtService.userid;
    this.isValid = true;
  }

  // will need method here to pull all financial data associated with this user's company
  validate(): boolean {
    var today = new Date();
    if (this.date > today || this.expenses < 0 || this.revenue < 0) {
      return false;
    } else { return true; }
  }

  submit() {
    this.isValid = this.validate();
    if (this.isValid) {
      var entry = {
        date: this.date,
        expenses: this.expenses,
        revenue: this.revenue
      }
      let observable = this._httpService.addData(this.userid, entry);
      observable.subscribe( (res: any) => {
        if (res[`success`]) { console.log('success'); } else { console.log('error', res[`error`]); }
      });
    } else {
      console.log('invalid input');
    }
  }

}
