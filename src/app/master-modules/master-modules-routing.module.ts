import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfoliodetailsComponent } from './portfoliodetails/portfoliodetails.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ShowDefaultContentComponent } from './home/show-default-content/show-default-content.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "", component: ShowDefaultContentComponent },
      { path: "moreServices", component: PortfoliodetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterModulesRoutingModule { }
