import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddupdateComponent } from './addupdate/addupdate.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "add", component: AddupdateComponent },
  { path: "add/:id", component: AddupdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
