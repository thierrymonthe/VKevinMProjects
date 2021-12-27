import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/services/donation-helper.service';

@Component({
  selector: 'app-donation-box',
  templateUrl: './donation-box.component.html',
  styleUrls: ['./donation-box.component.css']
})
export class DonationBoxComponent extends DonationHelperService {

}
