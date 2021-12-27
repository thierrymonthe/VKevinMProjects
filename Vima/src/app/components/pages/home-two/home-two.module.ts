import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountdownModule } from "ng2-countdown-timer";

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { DonationBoxComponent } from './donation-box/donation-box.component';
import { TabsProductComponent } from './tabs-product/tabs-product.component';
import { DonationCampaignsComponent } from './donation-campaigns/donation-campaigns.component';
import { ShopBoxComponent } from './shop-box/shop-box.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    BlogPostComponent,
    TestimonialsComponent,
    BannerComponent,
    AboutTextComponent,
    BestSellersComponent,
    DonationBoxComponent,
    TabsProductComponent,
    DonationCampaignsComponent,
    ShopBoxComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CountdownModule
  ]
})
export class HomeTwoModule { }
