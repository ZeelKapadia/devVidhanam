import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  dataLists = [
    {
      thumbImage: "/assets/img/why_us_1.jpg",
      icon: "/assets/img/icon/employees.png",
      title: "Friendly Environment",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
    {
      thumbImage: "/assets/img/why_us_2.jpg",
      icon: "/assets/img/icon/statistics.png",
      title: "Expert Instructor",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
    {
      thumbImage: "/assets/img/why_us_3.jpg",
      icon: "/assets/img/icon/locked.png",
      title: "Group Teaching",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
    {
      thumbImage: "/assets/img/why_us_1.jpg",
      icon: "/assets/img/icon/employees.png",
      title: "Friendly Environment",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
    {
      thumbImage: "/assets/img/why_us_2.jpg",
      icon: "/assets/img/icon/statistics.png",
      title: "Expert Instructor",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
    {
      thumbImage: "/assets/img/why_us_3.jpg",
      icon: "/assets/img/icon/locked.png",
      title: "Group Teaching",
      description: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque."
    },
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "prevArrow": false,
    "nextArrow": false,
  };
}
