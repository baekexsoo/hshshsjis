import { TestBed, inject } from '@angular/core/testing';

import { DistributeursService } from './distributeurs.service';

describe('DistributeursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributeursService]
    });
  });

  it('should be created', inject([DistributeursService], (service: DistributeursService) => {
    expect(service).toBeTruthy();
  }));
});
