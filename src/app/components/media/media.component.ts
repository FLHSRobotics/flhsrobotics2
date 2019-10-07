import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../services/flamelink.service';
declare var jQuery: any;
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  dbPromise: Promise<any>;
  mediaLink = [];
  isMediaLoaded = false;
  constructor(
    private _fl: FlamelinkService
  ) { }

  async ngOnInit() {
    this.isMediaLoaded = false;
    this.dbPromise = await this._fl.getApp().content.get({ schemaKey: 'media'});
    // tslint:disable-next-line:forin
    for (const media in this.dbPromise) {
      this.mediaLink.push(await this._fl.getApp().storage.getURL({fileId: this.dbPromise[media].media[0].id}));
    }
    this.isMediaLoaded = true;
    jQuery('.carousel.carousel-slider').carousel({fullWidth: true});
  }

}
