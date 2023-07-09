import { Component } from '@angular/core';
import { DataTransferService } from './service/data-transfer.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor(private dataTransfer: DataTransferService) { }

  onclick(index: number) {
    this.dataTransfer.sendData.next(index);
  }
}
