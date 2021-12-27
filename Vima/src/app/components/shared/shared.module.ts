import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from "ng2-countdown-timer";


import { AdvertisementComponent } from './advertisement/advertisement.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DonationSidebarComponent } from './donation-sidebar/donation-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsletterOneComponent } from './newsletter-one/newsletter-one.component';
import { NewsletterTwoComponent } from './newsletter-two/newsletter-two.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { StorySidebarComponent } from './story-sidebar/story-sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CtaComponent } from './cta/cta.component';
import { VideoCtaComponent } from './video-cta/video-cta.component';



@NgModule({
  declarations: [
    AdvertisementComponent,
    BlogSidebarComponent,
    BreadcrumbsComponent,
    DonationSidebarComponent,
    FooterComponent,
    HeaderComponent,
    NewsletterOneComponent,
    NewsletterTwoComponent,
    ShopSidebarComponent,
    StorySidebarComponent,
    TopBarComponent,
    CtaComponent,
    VideoCtaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxUsefulSwiperModule,
    NgbModule,
    BreadcrumbModule,
    NgxSliderModule,
    FormsModule,
    CountdownModule
  ],
  exports: [
    AdvertisementComponent,
    BlogSidebarComponent,
    BreadcrumbsComponent,
    DonationSidebarComponent,
    FooterComponent,
    HeaderComponent,
    NewsletterOneComponent,
    NewsletterTwoComponent,
    ShopSidebarComponent,
    StorySidebarComponent,
    TopBarComponent,
    CtaComponent,
    VideoCtaComponent
  ]
})
export class SharedModule { }
