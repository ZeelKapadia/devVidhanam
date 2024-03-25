import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "prevArrow": `<button class="slick-arrow" style="position:absolute;display:block;top:50%;transform:translate(0,-50%);padding:0;outline:none;left:-25px;border: 1px solid #f6c405;color: #011e40;font-size: 30px;height: 40px;line-height: 40px;text-align: center;transition: all 0.5s ease-out 0s; width: 40px; background: #f6c405" aria-label="Previous" type="button"><i class="fa fa-angle-left"></i></button>`,
    "nextArrow": `<button class="slick-arrow" style="position:absolute;display:block;top:50%;transform:translate(0,-50%);padding:0;outline:none;right:-25px;border: 1px solid #f6c405;color: #011e40;font-size: 30px;height: 40px;line-height: 40px;text-align: center;transition: all 0.5s ease-out 0s; width: 40px; background: #f6c405" aria-label="Previous" type="button"><i class="fa fa-angle-right"></i></button>`,

    // "prevArrow": false,
    // "nextArrow": false,
  };
}
