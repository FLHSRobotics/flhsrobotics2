import { Component, OnInit } from '@angular/core';
import {FlamelinkService} from '../../services/flamelink.service';
declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _fl: FlamelinkService
  ) { }

  ngOnInit() {

    this._fl.getApp().content.getRaw({
      schemaKey: 'teams'
    })
      .then(docs=>{
        console.log(docs);
      })

    jQuery('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );
  }

}
