import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent extends ShopService {
  text: any = {
    Days: "Day",
    Hours: "Hr",
    Minutes: "Min",
    Seconds: "Sec"
  };
}
