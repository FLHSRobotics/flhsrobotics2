import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ftc } from '../data/ftc';
import {isUndefined} from 'util';
@Component({
  selector: 'app-ftc',
  templateUrl: './ftc.component.html',
  styleUrls: ['./ftc.component.css']
})
export class FtcComponent implements OnInit {

  teamId: string;
  teamMember: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.teamId = this.route.snapshot.params['teamNum'];
    if (this.teamId !== '0') {
      const teamNum = parseInt(this.teamId);
      this.teamMember = this.searchTeam(teamNum);
    }
  }
  searchTeam(teamId: number): Array<any> {
    const obj = ftc.find(o => o.team === teamId);
    if (!obj) {
      this.router.navigate(['/404']);
    }else {
      return obj.members;
    }
  }

}
