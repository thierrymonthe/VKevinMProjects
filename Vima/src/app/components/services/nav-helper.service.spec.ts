import { TestBed } from '@angular/core/testing';

import { NavHelperService } from './nav-helper.service';

describe('NavHelperService', () => {
  let service: NavHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
