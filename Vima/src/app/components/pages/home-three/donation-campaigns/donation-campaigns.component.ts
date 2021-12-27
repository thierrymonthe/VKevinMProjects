import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/services/donation-helper.service';

@Component({
  selector: 'app-donation-campaigns',
  templateUrl: './donation-campaigns.component.html',
  styleUrls: ['./donation-campaigns.component.css']
})
export class DonationCampaignsComponent extends DonationHelperService {

}
