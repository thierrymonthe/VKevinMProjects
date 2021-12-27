import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ProcessComponent } from './process/process.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    ProcessComponent,
    TestimonialsComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class AboutModule { }
