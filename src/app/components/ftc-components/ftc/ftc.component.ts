import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ftc } from '../../../data/ftc';
import {FlamelinkService} from '../../../services/flamelink.service';
@Component({
  selector: 'app-ftc',
  templateUrl: './ftc.component.html',
  styleUrls: ['./ftc.component.css']
})
export class FtcComponent implements OnInit {

  urlParams: Params;
  teamId: number;
  teamMember: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fl: FlamelinkService
  ) { }
  async ngOnInit() {
    this.urlParams = await this.route.params.subscribe()
    console.log(this.urlParams)
    this._fl.getApp().content.getByField({
      schemaKey: 'teams',
      field: 'teamName',
      value: this.teamId
    })
      .then(data => {
        this.teamMember = data[Object.keys(data)[0]].teamMemberPhotos;
      });
  }
}
