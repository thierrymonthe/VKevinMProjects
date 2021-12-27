import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountdownModule } from "ng2-countdown-timer";

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BannerComponent } from './banner/banner.component';
import { TeamComponent } from './team/team.component';
import { TabsProductComponent } from './tabs-product/tabs-product.component';
import { AdvComponent } from './adv/adv.component';
import { DonationBoxComponent } from './donation-box/donation-box.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { DonationCampaignsComponent } from './donation-campaigns/donation-campaigns.component';
import { ShopBoxComponent } from './shop-box/shop-box.component';


@NgModule({
  declarations: [
    HomeThreeComponent,
    BlogPostComponent,
    TestimonialsComponent,
    BannerComponent,
    TeamComponent,
    TabsProductComponent,
    AdvComponent,
    DonationBoxComponent,
    BestSellersComponent,
    DonationCampaignsComponent,
    ShopBoxComponent
  ],
  imports: [
    CommonModule,
    HomeThreeRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CountdownModule
  ]
})
export class HomeThreeModule { }
