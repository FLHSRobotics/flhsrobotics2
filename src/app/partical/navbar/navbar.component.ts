import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  ) { }


  ngOnInit() {
    jQuery('.button-collapse').sideNav({
      menuWidth:  300, // Default is 300
      edge:  'left', // Choose the horizontal origin
      draggable:  true, // Choose whether you can drag to open on touch screens,
    }
  );
  }

}
