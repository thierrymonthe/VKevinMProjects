import { Component } from '@angular/core';
import { CartHelperService } from 'src/app/components/services/cart-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends CartHelperService {

}
