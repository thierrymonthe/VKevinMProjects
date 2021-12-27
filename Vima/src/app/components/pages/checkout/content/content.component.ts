import { Component } from '@angular/core';
import { CartHelperService } from 'src/app/components/services/cart-helper.service';
import tags from '../../../data/shop/tag.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends CartHelperService {
  // Tags
  public getTags(items: string | any[]) {
    var elems = tags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  paygiftcheck: boolean = true;
  promocodecheck: boolean = true;
  savecardcheck: boolean = false;
  addcardcheck: boolean = true;
  paygift() {
    this.paygiftcheck = !this.paygiftcheck;
  }
  promocode() {
    this.promocodecheck = !this.promocodecheck;
  }
  addcard() {
    this.addcardcheck = !this.addcardcheck;
  }
  savecard() {
    this.savecardcheck = !this.savecardcheck;
  }

}
