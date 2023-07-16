import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  sendData: Subject<number> = new Subject<number>()
  setData: Observable<number> = this.sendData as Observable<number>;

  sendLang: Subject<any> = new Subject<any>()
  setLang: Observable<any> = this.sendLang as Observable<any>

  httpUrl = "http://localhost:3000/api/sendMail";

  constructor(private http: HttpClient) { }

  getData() {
    return this.setData.subscribe(response => {
      return response;
    })
  }

  getLanguage() {
    return this.setLang.subscribe(response => {
      return response
    })
  }

  sendMail(data: any) {
    return this.http.post(this.httpUrl, data);
  }

  scrollToElement(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
