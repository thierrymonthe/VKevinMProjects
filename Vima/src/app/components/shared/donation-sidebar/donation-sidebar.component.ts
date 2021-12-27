import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/services/donation-helper.service';

@Component({
  selector: 'app-donation-sidebar',
  templateUrl: './donation-sidebar.component.html',
  styleUrls: ['./donation-sidebar.component.css']
})
export class DonationSidebarComponent extends DonationHelperService {

}