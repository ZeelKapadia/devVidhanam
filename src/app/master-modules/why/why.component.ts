import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataTransferService } from '../services/service/data-transfer.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnChanges {
  language;

  constructor(private languageService: DataTransferService, private translateService: TranslateService) {
    this.language = this.languageService.getLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.language != undefined || this.language != null) {
      this.translateService.use(this.language);
    }
  }

}
