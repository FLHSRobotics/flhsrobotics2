import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ftc',
  templateUrl: './ftc.component.html',
  styleUrls: ['./ftc.component.css']
})
export class FtcComponent implements OnInit {

  teamId:string;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.teamId = this.route.snapshot.params['teamNum'];
  }

}
