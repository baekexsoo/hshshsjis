import { TestBed, inject } from '@angular/core/testing';

import { ProgrammeService } from './programme.service';

describe('ProgrammeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgrammeService]
    });
  });

  it('should be created', inject([ProgrammeService], (service: ProgrammeService) => {
    expect(service).toBeTruthy();
  }));
});
