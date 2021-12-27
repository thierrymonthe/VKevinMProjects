import { TestBed } from '@angular/core/testing';

import { StoryHelperService } from './story-helper.service';

describe('StoryHelperService', () => {
  let service: StoryHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
