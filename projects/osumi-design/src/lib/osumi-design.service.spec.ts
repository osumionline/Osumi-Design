import { TestBed } from '@angular/core/testing';

import { OsumiDesignService } from './osumi-design.service';

describe('OsumiDesignService', () => {
  let service: OsumiDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsumiDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
