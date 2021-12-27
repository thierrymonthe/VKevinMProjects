import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoryDetailsRoutingModule } from './story-details-routing.module';
import { StoryDetailsComponent } from './story-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    StoryDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    StoryDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class StoryDetailsModule { }
