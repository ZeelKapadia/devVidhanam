import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterModulesRoutingModule } from './master-modules-routing.module';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    MasterModulesRoutingModule
  ]
})
export class MasterModulesModule { }
