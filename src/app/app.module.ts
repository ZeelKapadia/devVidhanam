import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SlidersComponent } from './modules/home/sliders/sliders.component';
import { AboutComponent } from './modules/home/about/about.component';
import { FeaturesComponent } from './modules/home/features/features.component';
import { CountsComponent } from './modules/home/counts/counts.component';
import { GalleryComponent } from './modules/home/gallery/gallery.component';
import { WhyChooseUsComponent } from './modules/home/why-choose-us/why-choose-us.component';
import { OurTeamComponent } from './modules/home/our-team/our-team.component';
import { TestimonialComponent } from './modules/home/testimonial/testimonial.component';
import { EventsComponent } from './modules/home/events/events.component';
import { CtaComponent } from './modules/home/cta/cta.component';
import { BlogsComponent } from './modules/home/blogs/blogs.component';
import { ConsultancyComponent } from './modules/consultancy/consultancy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDetailsComponent } from './modules/service-details/service-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './modules/contact/contact.component';
import { ProvideServiceComponent } from './modules/provide-service/provide-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlidersComponent,
    AboutComponent,
    FeaturesComponent,
    CountsComponent,
    GalleryComponent,
    WhyChooseUsComponent,
    OurTeamComponent,
    TestimonialComponent,
    EventsComponent,
    CtaComponent,
    BlogsComponent,
    ConsultancyComponent,
    ServiceDetailsComponent,
    ContactComponent,
    ProvideServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, 'assets/i18n', '.json'); },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
