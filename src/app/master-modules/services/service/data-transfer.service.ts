import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  sendData: Subject<number> = new Subject<number>()
  setData: Observable<number> = this.sendData as Observable<number>

  constructor() { }

  getData() {
    return this.setData.subscribe(response => {
      return response;
    })
  }
}
