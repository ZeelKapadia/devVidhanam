import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProvideService } from 'src/app/services/provide.service';

@Component({
  selector: 'app-provide-service',
  templateUrl: './provide-service.component.html',
  styleUrls: ['./provide-service.component.scss']
})
export class ProvideServiceComponent {
  servicesLists = []

  constructor(private provideService: ProvideService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicesLists = this.provideService.getServices();
  }

  onNavigation(index) {
    this.router.navigate([index], { relativeTo: this.activatedRoute })
  }
}
