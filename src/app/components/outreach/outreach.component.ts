import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../services/flamelink.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {

  constructor(
    private _fl: FlamelinkService,
    private metaService: MetaService
  ) { }

  outreachArr = [];
  dbPromise: Promise<any>;
  isContentLoaded: boolean;
  async ngOnInit() {
    this.metaService.updateMeta('Outreach - Francis Lewis Robotics',
      'Our members focus not only on building and programming robots but also on reaching ' +
      'out to students not yet involved with robotics. ');
    this.isContentLoaded = false;
    this.dbPromise = await this._fl.getApp().content.get({ schemaKey: 'outreach'});
    console.log(this.dbPromise);
    // tslint:disable-next-line:forin
    for (const media in this.dbPromise) {
      this.outreachArr.push({
        img: await this._fl.getApp().storage.getURL({fileId: this.dbPromise[media].outreachPhoto[0].id}),
        outreachName: this.dbPromise[media].outreachName,
        outreachDescription: this.dbPromise[media].outreachDescription,
        date: this.dbPromise[media].date
      });
    }
    this.isContentLoaded = true;
  }

}
