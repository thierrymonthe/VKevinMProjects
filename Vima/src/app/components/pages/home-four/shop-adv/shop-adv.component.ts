import { Component, OnInit } from '@angular/core';
import data from '../../../data/shopadv.json';

@Component({
  selector: 'app-shop-adv',
  templateUrl: './shop-adv.component.html',
  styleUrls: ['./shop-adv.component.css']
})
export class ShopAdvComponent implements OnInit {

  constructor() { }
  public shopadv = data;

  ngOnInit(): void {
  }

}
