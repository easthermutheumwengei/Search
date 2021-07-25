import { TestBed } from '@angular/core/testing';

import { GithubRequestServiceService } from './github-request.service';

describe('GithubRequestServiceService', () => {
  let service: GithubRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
