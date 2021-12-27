import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DonationDetailsRoutingModule } from './donation-details-routing.module';
import { DonationDetailsComponent } from './donation-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    DonationDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DonationDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class DonationDetailsModule { }
