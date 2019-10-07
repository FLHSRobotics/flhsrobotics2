import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../../services/flamelink.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-frc-about',
  templateUrl: './frc-about.component.html',
  styleUrls: ['./frc-about.component.css']
})
export class FrcAboutComponent implements OnInit {

  embeddedPlayerLink: SafeUrl;
  constructor(
    private _fl: FlamelinkService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._fl.getApp().content.get({ schemaKey: 'sitewideSettings'})
      .then((data) => {
        this.embeddedPlayerLink = this.sanitizer.bypassSecurityTrustResourceUrl(data.frcVideoLink);
      });
  }

}
