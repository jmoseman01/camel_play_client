import { TestBed } from '@angular/core/testing';

import { AtmospherePlayService } from './atmosphere-play.service';

describe('AtmospherePlayService', () => {
  let service: AtmospherePlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmospherePlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
