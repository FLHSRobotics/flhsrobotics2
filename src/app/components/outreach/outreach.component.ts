import { Component, OnInit } from '@angular/core';
import {outreach} from "../../data/outreach";

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {

  constructor(
  ) { }

  outreachArr: any;

  ngOnInit() {
    this.outreachArr = outreach;
  }

}
