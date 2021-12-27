import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountdownModule } from "ng2-countdown-timer";
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter  } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { TeamComponent } from './team/team.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { DonationBoxComponent } from './donation-box/donation-box.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { DonationCampaignsComponent } from './donation-campaigns/donation-campaigns.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ShopBoxComponent } from './shop-box/shop-box.component';


@NgModule({
  declarations: [
    HomeComponent, 
    BannerComponent,
    ServiceTypeComponent,
    TeamComponent,
    BestSellersComponent,
    DonationBoxComponent,
    ProductBoxComponent,
    DonationCampaignsComponent,
    TestimonialsComponent,
    BlogPostComponent,
    ShopBoxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CountdownModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ]
})
export class HomeModule { }
