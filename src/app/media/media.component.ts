import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.carousel.carousel-slider').carousel({fullWidth: true});
  }

}
