import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataTransferService } from 'src/app/master-modules/services/service/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  class = "collapse navbar-collapse";
  isShow = false;
  isShowPujaDetail = true;

  _isJyotish = false;
  _isKarmaKand = false;
  _isSastraParichay = false;

  title = "Jyotish";
  type = ""

  isJyotish = "";
  isJyotishChild = "";
  isKarmaKand = "";
  isKarmaKandChild = "";
  isSastraParichay = "";
  isSastraParichayChild = "";

  supportLanguages = ["en", "hi", "gu"]

  constructor(private scrollService: DataTransferService, private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('hi');


    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang);
  }

  ngOnInit(): void {
    this.scrollService.getData.subscribe((response: any) => {
      this.isShowPujaDetail = response.isShowPujaDetail
      this.title = response.title;
      this.type = response.type;
    });
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

  addClasses(selectedMenu) {
    if (selectedMenu == "isJyotish") {
      if (this._isJyotish == false) {
        this.isJyotish = "active show";
        this.isJyotishChild = "in show";
        this._isJyotish = true;
      } else {
        this.isJyotish = "";
        this.isJyotishChild = "";
        this._isJyotish = false;
      }
    } else if (selectedMenu == "isKarmaKand") {
      if (this._isKarmaKand == false) {
        this.isKarmaKand = "active show";
        this.isKarmaKandChild = "in show";
        this._isKarmaKand = true;
      } else {
        this.isKarmaKand = "";
        this.isKarmaKandChild = "";
        this._isKarmaKand = false;
      }
    } else if (selectedMenu == "isSastraParichay") {
      if (this._isSastraParichay == false) {
        this.isSastraParichay = "active show";
        this.isSastraParichayChild = "in show";
        this._isSastraParichay = true;
      } else {
        this.isSastraParichay = "";
        this.isSastraParichayChild = "";
        this._isSastraParichay = false;
      }
    }
  }
}
