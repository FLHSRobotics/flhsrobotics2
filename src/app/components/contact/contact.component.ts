import { Component, OnInit } from '@angular/core';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.metaService.updateMeta('Contact - Francis Lewis Robotics',
      'Contact Francis Lewis Robotics!');
  }

}
