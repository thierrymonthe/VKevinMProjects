import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { DonationArchiveRoutingModule } from './donation-archive-routing.module';
import { DonationArchiveComponent } from './donation-archive.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    DonationArchiveComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DonationArchiveRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class DonationArchiveModule { }
