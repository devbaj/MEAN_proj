import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  rangeString: string;

  constructor() { }

  ngOnInit() {
  }

  adjustRange() {

  }

  setReportConditions() {

  }

  writeDayReport() {

  }

  report() {
    let doc = new jsPDF();
    doc.text('Hello world!', 4, 20);
    doc.save('test.pdf');
  }

}
