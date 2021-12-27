import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { ShopDetailsRoutingModule } from './shop-details-routing.module';
import { ShopDetailsComponent } from './shop-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ShopDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ShopDetailsRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class ShopDetailsModule { }
