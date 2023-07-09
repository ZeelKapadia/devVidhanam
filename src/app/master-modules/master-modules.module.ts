import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterModulesRoutingModule } from './master-modules-routing.module';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { MasterLayoutModule } from '../master-layout/master-layout.module';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { WhyComponent } from './why/why.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { PortfoliodetailsComponent } from './portfoliodetails/portfoliodetails.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    ClientsComponent,
    AboutComponent,
    WhyComponent,
    SkillsComponent,
    ServicesComponent,
    CtaComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    PortfoliodetailsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MasterModulesRoutingModule,
    MasterLayoutModule
  ]
})
export class MasterModulesModule { }
