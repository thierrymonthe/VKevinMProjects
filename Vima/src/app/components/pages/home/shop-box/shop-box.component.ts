import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-shop-box',
  templateUrl: './shop-box.component.html',
  styleUrls: ['./shop-box.component.css']
})
export class ShopBoxComponent extends ShopService {
  text: any = {
    Days: "Day",
    Hours: "Hr",
    Minutes: "Min",
    Seconds: "Sec" 
  };
} 
