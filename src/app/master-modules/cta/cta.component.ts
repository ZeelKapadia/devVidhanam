import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataTransferService } from '../services/service/data-transfer.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnChanges {

  language: any = ""

  constructor(private languageService: DataTransferService, private translateService: TranslateService) {
    this.language = this.languageService.getLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.language != undefined || this.language != null) {
      this.translateService.use(this.language);
    }
  }
}
