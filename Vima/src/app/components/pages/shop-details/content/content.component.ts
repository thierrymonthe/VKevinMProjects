import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';
import { SwiperOptions } from 'swiper';
import SwiperCore, {
  Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Thumbs]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ShopService {
  // Settings config
  settings: SwiperOptions = {
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  settingsThumb: SwiperOptions = {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true
  };
}
