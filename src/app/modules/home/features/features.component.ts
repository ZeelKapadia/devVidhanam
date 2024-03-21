import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": false,
    "autoplaySpeed": 2500,
    "prevArrow": false,
    "nextArrow": false,
  };
}
