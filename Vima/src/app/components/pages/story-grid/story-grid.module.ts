import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { StoryGridRoutingModule } from './story-grid-routing.module';
import { StoryGridComponent } from './story-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    StoryGridComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    StoryGridRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class StoryGridModule { }
