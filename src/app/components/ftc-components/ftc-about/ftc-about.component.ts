import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FlamelinkService} from '../../../services/flamelink.service';
import {MetaService} from '../../../services/meta.service';

@Component({
  selector: 'app-ftc-about',
  templateUrl: './ftc-about.component.html',
  styleUrls: ['./ftc-about.component.css']
})
export class FtcAboutComponent implements OnInit {

  embeddedPlayerLink: SafeUrl;
  constructor(
    private _fl: FlamelinkService,
    private sanitizer: DomSanitizer,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.metaService.updateMeta('First Tech Chanllenge - Francis Lewis Robotics',
      'The FTC program is one of the most popular programs at Francis Lewis High School. ' +
      'Due to sustained interest in FTC, ' +
      'the school has eight FTC teams that compete in various tournaments not only in New York City ' +
      'but also in New Jersey and Hudson Valley.')
    this._fl.getApp().content.get({ schemaKey: 'sitewideSettings' })
      .then((data) => {
        this.embeddedPlayerLink = this.sanitizer.bypassSecurityTrustResourceUrl(data.ftcVideoLink);
      });
  }
}
