import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  sendData: Subject<number> = new Subject<number>()
  setData: Observable<number> = this.sendData as Observable<number>;

  // scrollToElement: Subject<any> = new Subject<any>()
  // subsScrollToElement: Observable<any> = this.scrollToElement as Observable<any>;

  sendLang: Subject<any> = new Subject<any>()
  setLang: Observable<any> = this.sendLang as Observable<any>

  httpUrl = "https://apidevi.onrender.com/api/sendMail";

  constructor(private http: HttpClient) { }

  getData() {
    return this.setData.subscribe(response => {
      return response;
    })
  }

  getLanguage() {
    return this.setLang.subscribe(response => {
      return response;
    })
  }

  sendMail(data: any) {
    return this.http.post(this.httpUrl, data);
  }

  scrollToElements(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private elementToScroll: string;


  setElementToScroll(elementId: string) {
    this.elementToScroll = elementId;
  }

  getElementToScroll() {
    return this.elementToScroll;
  }
}
