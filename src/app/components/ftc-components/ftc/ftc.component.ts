import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlamelinkService} from '../../../services/flamelink.service';
import {MetaService} from '../../../services/meta.service';
@Component({
  selector: 'app-ftc',
  templateUrl: './ftc.component.html',
  styleUrls: ['./ftc.component.css']
})
export class FtcComponent implements OnInit {

  teamId: string;
  dbPromise: Promise<any>;
  teamMember = [];
  teamDescription = '';
  isMemberLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fl: FlamelinkService,
    private metaService: MetaService
  ) { }

  private loadMembers = () => {
    this.route.params.subscribe(async params => {
      this.isMemberLoaded = false;
      this.teamId = params['teamNum'];
      this.dbPromise = await this._fl.getApp().content.getByField({
        schemaKey: 'teams',
        field: 'teamName',
        value: this.teamId
      });
      console.log(this.dbPromise);
      if (this.dbPromise == null) {
        await this.router.navigate(['/404']);
      }
      this.metaService.updateMeta(`Team ${this.teamId} - Francis Lewis Robotics`,
        this.dbPromise[Object.keys(this.dbPromise)[0]].teamDescription);
      for (const e of this.dbPromise[Object.keys(this.dbPromise)[0]].teamMemberPhotos) {
        e['image_url'] = await this._fl.getApp().storage.getURL({ fileId: e.image[0].id });
      }
      this.teamMember = this.dbPromise[Object.keys(this.dbPromise)[0]].teamMemberPhotos;
      this.teamDescription = this.dbPromise[Object.keys(this.dbPromise)[0]].teamDescription;
      this.isMemberLoaded = true;
    });
  }

  async ngOnInit() {
    this.loadMembers();
  }
}
