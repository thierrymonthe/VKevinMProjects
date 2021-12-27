import { Component } from '@angular/core';
import { StoryHelperService } from 'src/app/components/services/story-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends StoryHelperService {

}
