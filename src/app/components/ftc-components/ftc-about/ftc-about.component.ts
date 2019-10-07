import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FlamelinkService} from '../../../services/flamelink.service';

@Component({
  selector: 'app-ftc-about',
  templateUrl: './ftc-about.component.html',
  styleUrls: ['./ftc-about.component.css']
})
export class FtcAboutComponent implements OnInit {

  embeddedPlayerLink: SafeUrl;
  constructor(
    private _fl: FlamelinkService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._fl.getApp().content.get({ schemaKey: 'sitewideSettings' })
      .then((data) => {
        this.embeddedPlayerLink = this.sanitizer.bypassSecurityTrustResourceUrl(data.ftcVideoLink);
      });
  }
}
