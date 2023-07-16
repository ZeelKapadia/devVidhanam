import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataTransferService } from 'src/app/master-modules/services/service/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = false;
  class = "collapse navbar-collapse";
  isShow = false;

  constructor(private scrollService: DataTransferService) { }

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


  scrollToTarget(event: string) {
    this.scrollService.scrollToElement(event);
  }
}
