import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ftc } from '../../../data/ftc';
import {FlamelinkService} from '../../../services/flamelink.service';
@Component({
  selector: 'app-ftc',
  templateUrl: './ftc.component.html',
  styleUrls: ['./ftc.component.css']
})
export class FtcComponent implements OnInit {

  teamId: number;
  teamMember: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fl: FlamelinkService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.teamId = +data.teamNum;
        const teamNum = +this.teamId;
        this.teamMember = this.searchTeam(teamNum);
    });
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
