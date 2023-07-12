import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = false;
  class = "collapse navbar-collapse";
  isShow = false;

  onToggleName() {
    this.isShow = !this.isShow
    if (this.isShow) {
      this.class += "show";
    }
    else {
      this.class = "collapse navbar-collapse"
    }
  }

  onclose() {
    this.isShow = false;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const bannerHeight = window.innerHeight / 10; // Change this value if needed
    this.isScrolled = window.pageYOffset > bannerHeight;
  }
}
