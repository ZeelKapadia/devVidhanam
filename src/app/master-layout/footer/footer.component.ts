import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataTransferService } from 'src/app/master-modules/services/service/data-transfer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {

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
