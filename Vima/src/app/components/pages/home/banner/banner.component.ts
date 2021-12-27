import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import data from '../../../data/banner.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public bannerdata = data;
  constructor() { }
  // settings
  settings: SwiperOptions = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 3500,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev'
    }

  };

  ngOnInit(): void {
  }

}
