import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryGridComponent } from './story-grid.component';

const routes: Routes = [{ path: '', component: StoryGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryGridRoutingModule { }
