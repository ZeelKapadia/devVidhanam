import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  supportLanguages = ["en", "hi", "gu"]

  constructor(private scrollService: DataTransferService, private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('hi');

    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang);
  }

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
    this.scrollService.scrollToElements(event);
  }

  scrollToElement(elementId: string) {
    this.scrollService.setElementToScroll(elementId);
  }

  onChange_Language(event: any) {
    const lang = event.target.value;
    this.translateService.use(lang);
    this.scrollService.sendLang.next(lang);
  }
}
