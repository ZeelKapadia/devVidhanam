import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiceDetailsComponent } from './modules/service-details/service-details.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProvideServiceComponent } from './modules/provide-service/provide-service.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "services", component: ProvideServiceComponent },
  { path: "services/:id", component: ServiceDetailsComponent },
  // { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
