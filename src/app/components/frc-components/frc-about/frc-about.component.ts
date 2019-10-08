import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../../services/flamelink.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MetaService} from '../../../services/meta.service';

@Component({
  selector: 'app-frc-about',
  templateUrl: './frc-about.component.html',
  styleUrls: ['./frc-about.component.css']
})
export class FrcAboutComponent implements OnInit {

  embeddedPlayerLink: SafeUrl;
  constructor(
    private _fl: FlamelinkService,
    private metaService: MetaService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.metaService.updateMeta('First Robotics Competition - Francis Lewis Robotics',
      'Founded in 2009, FRC Team 3017 (Patriots) is the oldest FIRST team at Francis Lewis High School. ' +
      'Inspired by this program, the school has expanded to create eight First Tech Challenge teams and build an ' +
      'Engineering Program that has graduated students who pursued careers in Engineering, Computer Science, etc.')
    this._fl.getApp().content.get({ schemaKey: 'sitewideSettings'})
      .then((data) => {
        this.embeddedPlayerLink = this.sanitizer.bypassSecurityTrustResourceUrl(data.frcVideoLink);
      });
  }

}
