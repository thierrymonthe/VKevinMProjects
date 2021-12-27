import { Component, OnInit } from '@angular/core';
import data from '../../../data/testimonials.json';
import author from '../../../data/authors.json';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public testimonials = data;
  public authors = author;
  constructor() { }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // settings
  settings: SwiperOptions = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
  };

  ngOnInit(): void {
  }

}
