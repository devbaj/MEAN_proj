import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { HttpService } from '../http.service';
import { UserMgmtService } from '../user-mgmt.service';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Injectable({
  providedIn: 'root'
})
export class D3Service {

  constructor(
    private _httpService: HttpService,
    private _userMgmtService: UserMgmtService
  ) { }

    drawLineChart() {
    }

}
