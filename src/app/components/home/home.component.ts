import { Component, OnInit } from '@angular/core';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.metaService.updateMeta('Francis Lewis Robotics',
      'Francis Lewis Robotics is composed of FRC Team 3017 and FTC teams 3006, ' +
      '4780, 4781, 4782, 4783,4784, 4785 and 4995.');
  }

}
