import { TestBed, inject } from '@angular/core/testing';

import { ProducteursService } from './producteurs.service';

describe('ProducteursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducteursService]
    });
  });

  it('should be created', inject([ProducteursService], (service: ProducteursService) => {
    expect(service).toBeTruthy();
  }));
});
