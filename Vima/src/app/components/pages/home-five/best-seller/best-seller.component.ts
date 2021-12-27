import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent extends ShopService {

}
