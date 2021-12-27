import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountdownModule } from "ng2-countdown-timer";

import { HomeFourRoutingModule } from './home-four-routing.module';
import { HomeFourComponent } from './home-four.component';
import { SharedModule } from '../../shared/shared.module';
import { TabsProductComponent } from './tabs-product/tabs-product.component';
import { BannerComponent } from './banner/banner.component';
import { ShopAdvComponent } from './shop-adv/shop-adv.component';
import { DonationComponent } from './donation/donation.component';
import { ShopBoxComponent } from './shop-box/shop-box.component';
import { DonationBoxComponent } from './donation-box/donation-box.component';


@NgModule({
  declarations: [
    HomeFourComponent,
    TabsProductComponent,
    BannerComponent,
    ShopAdvComponent,
    DonationComponent,
    ShopBoxComponent,
    DonationBoxComponent
  ],
  imports: [
    CommonModule,
    HomeFourRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CountdownModule
  ]
})
export class HomeFourModule { }
