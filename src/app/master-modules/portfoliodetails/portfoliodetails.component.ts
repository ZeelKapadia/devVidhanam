import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/service/data-transfer.service';

@Component({
  selector: 'app-portfoliodetails',
  templateUrl: './portfoliodetails.component.html',
  styleUrls: ['./portfoliodetails.component.scss']
})
export class PortfoliodetailsComponent implements OnInit {

  constructor(private dataTransfer: DataTransferService) { }

  showHeader = "";
  showDetails = "";
  showImage = "";
  showOtherImage = "";
  showBenefits = "";
  showWhentoDo = "";

  ngOnInit(): void {
    this.setUpInfo(+this.dataTransfer.getData());
  }

  setUpInfo(num: number) {
    switch (num) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      default:
        this.showHeader = "";
        this.showDetails = "";
        break;
    }
  }
}
