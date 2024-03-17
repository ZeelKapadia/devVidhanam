import { Component, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "prevArrow": `<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>`,
    "nextArrow": `<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>`,
    // "prevArrow": false,
    // "nextArrow": false,
  };

  listsImages = ["assets/img/WebsiteSlider/4.png", "assets/img/WebsiteSlider/ForIndia.png", "assets/img/WebsiteSlider/ForOutofIndia(2).png", "assets/img/WebsiteSlider/ForOutofIndia.jpg"]

}
