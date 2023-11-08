import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataTransferService } from '../services/service/data-transfer.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnChanges {

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
