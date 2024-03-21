import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "prevArrow": false,
    "nextArrow": false,
  }
  blogsLists = [
    { image: "/assets/img/b1.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "write a good professional server-side scripting language php code", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" },
    { image: "/assets/img/b2.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "Most Popular Python to build desktop apps and web apps", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" },
    { image: "/assets/img/b3.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "Java Programing language use for apps, game develop", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" },
    { image: "/assets/img/b1.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "write a good professional server-side scripting language php code", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" },
    { image: "/assets/img/b2.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "Most Popular Python to build desktop apps and web apps", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" },
    { image: "/assets/img/b3.jpg", role: "Admin", date: "1 Jan 2018", comments: "36", navLink: "blog-details.html", linkText: "Java Programing language use for apps, game develop", linkDescription: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa.Sagittis urna tellus augue montes.", continue: "Continue reading" }
  ]
}
