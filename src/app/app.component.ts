import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DevVidhanam';

  analytics: Analytics
  constructor(analytics: Analytics) {
    this.analytics = analytics
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((response) => {
      logEvent(this.analytics, "page_view", {
        "name": navigator.platform,
        "place": "longitude: " + response.coords
          .longitude + " , Latitude: " + response.coords.latitude,
      })
    })
  }

}
