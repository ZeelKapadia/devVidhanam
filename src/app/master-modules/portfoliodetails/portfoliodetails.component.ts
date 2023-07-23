import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/service/data-transfer.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-portfoliodetails',
  templateUrl: './portfoliodetails.component.html',
  styleUrls: ['./portfoliodetails.component.scss']
})
export class PortfoliodetailsComponent implements OnInit {

  constructor() { }

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
    { id: 1, value: "Grah Dosh Nivaran", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 2, value: "Vivaah Dosh Nivaran", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 3, value: "Rog Nivaran", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 4, value: "Sighra Vivah Anusthaan", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 5, value: "Vidhyaa Prapti Anusthan", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
  ]
  shastraList = [
    { id: 1, value: "Shreemad Bhagwat Katha", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 2, value: "Raam Katha", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
    { id: 3, value: "Gitaa Pravachan", image: "assets/img/comingSoon.jpg", description: "Comming Soon" },
  ]

  karmKandList = [
    { id: 1, value: "Vishnusahstra Paath", image: "assets/img/comingSoon.jpg", description: "This best stotra quoted from Mahabharata was given as a sermon to Shri Yudhishthirji by Pitamah Bhishma. In which more than 1000 names of Lord Vishnu are mentioned. There is immense power hidden in this hymn. Which is helpful in removing all the problems in Kalyug. This lesson is the best factor for the salvation of ancestors, for attaining salvation and for the fulfillment of other wishes. It is considered best to do this lesson in numbers like 11, 21, 51, 108 etc." },
    { id: 2, value: "Bilvarchan", image: "assets/img/comingSoon.jpg", description: "Bilvapatra is very dear to Shivji. So according to this scripture order, we will offer 108 numbers of Bilvapatra to Lord Shiva in Bilvapatraarchan worship. And according to the Puranas, every wish of the devotee is fulfilled by offering Belpatra on the Shivling. Lakshmi is definitely attained by offering Belpatra. But the fruits of enjoyment, salvation and pilgrimage are also obtained." },
    { id: 3, value: "Shree sukta Path", image: "assets/img/comingSoon.jpg", description: "There is hardly any person in the world who does not wish for happiness and prosperity by the grace of Lakshmi ji. It is the wish of everyone that Maa Lakshmi resides in their house. According to Rigveda, this is the best way out of many ways to please Lakshmi ji. Sri Suktam. The chanting of these mantras and the Yagya Ashta Vidhi makes Lakshmiji attain. And with this, the blessings of Lakshmi ji definitely remain on you." },
    {
      id: 4, value: "Rudraabhishek", image: "assets/img/comingSoon.jpg", description: `Lord Shankar is also the god of gods. And all the gods also bow their heads at his feet. There is no such desire which is not fulfilled by the consecration of Lord Shiva. In this worship, Lord Shiva is anointed with various substances by chanting the mantras of Yajurveda. for example
With sugarcane juice to get Lakshmi,
      From pilgrimage water to attain salvation
from milk to have children
For the peace of fever with water carrier
For better intelligence, anointing should be done with milk mixed with sugar.` },
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
      pujaTitle: this.title,
      pujaDescription: this.description,
    }
    this.dataToBind.next(senderData);

  }
}
