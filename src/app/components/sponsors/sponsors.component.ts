import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../services/flamelink.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  dbPromise: Promise<any>;
  mediaLink = [];
  isMediaLoaded = false;
  constructor(
    private _fl: FlamelinkService,
    private metaService: MetaService
  ) { }

  async ngOnInit() {
    this.metaService.updateMeta('Sponsors - Francis Lewis Robotics',
      'We would like to thank our valued sponsors for their support.');
    this.isMediaLoaded = false;
    this.dbPromise = await this._fl.getApp().content.get({ schemaKey: 'sponsors'});
    // tslint:disable-next-line:forin
    for (const media in this.dbPromise) {
      this.mediaLink.push({
          logo: await this._fl.getApp().storage.getURL({fileId: this.dbPromise[media].sponsorLogo[0].id}),
          name: this.dbPromise[media].sponsorName,
          team: this.dbPromise[media].sponsoredTeam
        });
      }
    this.isMediaLoaded = true;
  }
}
