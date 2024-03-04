import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiceDetailsComponent } from './modules/service-details/service-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "services", pathMatch: "full", component: ServiceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
