import { Component, OnInit } from '@angular/core';
import data from '../../data/instagram.json';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public instagram = data;
  constructor() { }
  // Settings
  settings: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      },
      1500: {
        slidesPerView: 8,
      },
    }

  };
  ngOnInit(): void {
  }

}
