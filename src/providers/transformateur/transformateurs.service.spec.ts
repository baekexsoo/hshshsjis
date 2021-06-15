import { TestBed, inject } from '@angular/core/testing';

import { TransformateursService } from './transformateurs.service';

describe('TransformateursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformateursService]
    });
  });

  it('should be created', inject([TransformateursService], (service: TransformateursService) => {
    expect(service).toBeTruthy();
  }));
});
