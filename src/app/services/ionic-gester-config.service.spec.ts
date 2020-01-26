import { TestBed } from '@angular/core/testing';

import { IonicGesterConfigService } from './ionic-gester-config.service';

describe('IonicGesterConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicGesterConfigService = TestBed.get(IonicGesterConfigService);
    expect(service).toBeTruthy();
  });
});
