import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from "ng2-countdown-timer";

import { HomeFiveRoutingModule } from './home-five-routing.module';
import { HomeFiveComponent } from './home-five.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { DonationBoxComponent } from './donation-box/donation-box.component';
import { ShopBoxComponent } from './shop-box/shop-box.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { TabsProductComponent } from './tabs-product/tabs-product.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';


@NgModule({
  declarations: [
    HomeFiveComponent,
    BannerComponent,
    BestSellerComponent,
    DonationBoxComponent,
    ShopBoxComponent,
    PageCtaComponent,
    TabsProductComponent,
    HotDealsComponent
  ],
  imports: [
    CommonModule,
    HomeFiveRoutingModule,
    SharedModule,
    NgbModule,
    CountdownModule
  ]
})
export class HomeFiveModule { }
