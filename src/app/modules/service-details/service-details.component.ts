import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvideService } from 'src/app/services/provide.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {


  serviceItem = {};

  constructor(private provideService: ProvideService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const index = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(index);
    this.serviceItem = this.provideService.getService(+index);
  }

}
