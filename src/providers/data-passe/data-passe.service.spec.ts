import { TestBed, inject } from '@angular/core/testing';

import { DataPasseService } from './data-passe.service';

describe('DataPasseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPasseService]
    });
  });

  it('should be created', inject([DataPasseService], (service: DataPasseService) => {
    expect(service).toBeTruthy();
  }));
});
