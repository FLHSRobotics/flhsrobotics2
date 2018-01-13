import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-frc',
  templateUrl: './frc.component.html',
  styleUrls: ['./frc.component.css']
})
export class FrcComponent implements OnInit {

  teamId: number;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.teamId = this.route.snapshot.params['teamNum'];
    console.log(this.teamId)
  }

}
