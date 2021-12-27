import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationDetailsComponent } from './donation-details.component';

const routes: Routes = [{ path: '', component: DonationDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationDetailsRoutingModule { }
