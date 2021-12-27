import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationArchiveComponent } from './donation-archive.component';

const routes: Routes = [{ path: '', component: DonationArchiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationArchiveRoutingModule { }
