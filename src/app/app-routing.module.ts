import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './master-modules/portfolio/portfolio.component';

const routes: Routes = [
  { path: "", redirectTo: "web", pathMatch: "full" },
  { path: "web", loadChildren: () => import("./master-modules/master-modules.module").then(m => m.MasterModulesModule) },
  // { path: "services",component: },
  // { path: "auth", pathMatch: "full", loadChildren: () => import("./master-modules/master-modules.module").then(m => m.MasterModulesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
