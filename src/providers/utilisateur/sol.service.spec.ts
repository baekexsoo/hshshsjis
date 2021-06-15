import { TestBed, inject } from '@angular/core/testing';

import { SolService } from './sol.service';

describe('SolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolService]
    });
  });

  it('should be created', inject([SolService], (service: SolService) => {
    expect(service).toBeTruthy();
  }));
});
