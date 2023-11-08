import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/service/data-transfer.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-show-default-content',
  templateUrl: './show-default-content.component.html',
  styleUrls: ['./show-default-content.component.scss']
})
export class ShowDefaultContentComponent implements OnInit {

  constructor(private dataTransfer: DataTransferService, private router: Router) {
  }

  ngAfterViewInit() {
    const elementId = this.dataTransfer.getElementToScroll();

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  ngOnInit(): void {

  }

}
