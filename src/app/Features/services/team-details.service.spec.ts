import { TestBed } from '@angular/core/testing';

import { TeamDetailsService } from './team-details.service';

describe('TeamDetailsService', () => {
  let service: TeamDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
