import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTransferService } from '../services/service/data-transfer.service';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfoliodetails',
  templateUrl: './portfoliodetails.component.html',
  styleUrls: ['./portfoliodetails.component.scss']
})
export class PortfoliodetailsComponent implements OnInit, OnDestroy {

  constructor(private translateService: TranslateService) { }

  isActive = 1;
  activeIndex = 0;
  group = this.isActive == 1 ? "Jyotishman chakshuh" : this.isActive == 2 ? "KarmKand" : "Shastra Parichay"

  title = this.isActive == 1 ? "Grah Dosh Nivaran" : this.isActive == 2 ? "Vishnusahstra Paath" : "Shreemad Bhagwat Katha";
  description = this.isActive == 1 ? "CommingSoon" : this.isActive == 2 ? "This best stotra quoted from Mahabharata was given as a sermon to Shri Yudhishthirji by Pitamah Bhishma. In which more than 1000 names of Lord Vishnu are mentioned. There is immense power hidden in this hymn. Which is helpful in removing all the problems in Kalyug. This lesson is the best factor for the salvation of ancestors, for attaining salvation and for the fulfillment of other wishes. It is considered best to do this lesson in numbers like 11, 21, 51, 108 etc." : "Comming Soon";
  image = "";

  dataToBind = new Subject<any>();

  ngOnInit(): void {
  }

  jyotishList = [
    { id: 1, value: "GrahDoshNivaran", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 2, value: "VivaahDoshNivaran", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 3, value: "RogNivaran", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 4, value: "SighraVivaahAnusthan", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 5, value: "VidhyaaPraptiAnusthan", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
  ]
  shastraList = [
    { id: 1, value: "ShreemadBhagwatKatha", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 2, value: "RaamKatha", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
    { id: 3, value: "GitaaPravachan", image: "assets/img/comingSoon.jpg", description: "CommingSoon" },
  ]

  karmKandList = [
    { id: 1, value: "ServiceVPTitle", image: "assets/img/comingSoon.jpg", description: "ServiceVPDescription" },
    { id: 2, value: "ServiceBilTitle", image: "assets/img/comingSoon.jpg", description: "ServiceBilDescription" },
    { id: 3, value: "ServiceSSPTitle", image: "assets/img/comingSoon.jpg", description: "ServiceSSPDescription" },
    { id: 4, value: "ServiceRAATitle", image: "assets/img/comingSoon.jpg", description: "ServiceRAADescription" },
    { id: 5, value: "ServiceTATitle", image: "assets/img/comingSoon.jpg", description: "ServiceTADescription" }
  ]

  onSelectCard(id: number) {
    this.isActive = id;
    this.activeIndex = 0;
    this.group = this.isActive == 1 ? "Jyotishman chakshuh" : this.isActive == 2 ? "KarmKand" : "Shastra Parichay"
    this.title = this.isActive == 1 ? "Grah Dosh Nivaran" : this.isActive == 2 ? "Vishnusahstra Paath" : "Shreemad Bhagwat Katha";
    this.description = this.isActive == 1 ? "CommingSoon" : this.isActive == 2 ? "This best stotra quoted from Mahabharata was given as a sermon to Shri Yudhishthirji by Pitamah Bhishma. In which more than 1000 names of Lord Vishnu are mentioned. There is immense power hidden in this hymn. Which is helpful in removing all the problems in Kalyug. This lesson is the best factor for the salvation of ancestors, for attaining salvation and for the fulfillment of other wishes. It is considered best to do this lesson in numbers like 11, 21, 51, 108 etc." : "Comming Soon";
  }


  setActive(index: number, detail: any) {
    this.activeIndex = index;
    this.description = detail.description;
    this.image = detail.image;
    this.title = detail.value;
  }


  onClickButton() {
    const senderData = {
      pujaTitle: this.getTranslated(this.title),
      pujaDescription: this.getTranslated(this.description),
    }
    this.dataToBind.next(senderData);
  }

  getTranslated(titleKey: string): string {
    return this.translateService.instant(titleKey);
  }

  ngOnDestroy(): void {
    this.dataToBind.unsubscribe();
  }

}
