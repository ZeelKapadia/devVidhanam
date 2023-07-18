import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    // "prevArrow": `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>`,
    // "nextArrow": `<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>`,
    "prevArrow": false,
    "nextArrow": false,
  };

  listsImages = ["assets/img/WebsiteSlider/4.png", "assets/img/WebsiteSlider/ForIndia.png", "assets/img/WebsiteSlider/ForOutofIndia(2).png", "assets/img/WebsiteSlider/ForOutofIndia.jpg"]
}
