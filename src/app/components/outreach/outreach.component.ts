import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../services/flamelink.service';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {

  constructor(
    private _fl: FlamelinkService
  ) { }

  outreachArr = [];
  dbPromise: Promise<any>;
  isContentLoaded: boolean;
  async ngOnInit() {
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
