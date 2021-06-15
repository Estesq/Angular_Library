import { TestBed } from '@angular/core/testing';

import { LibraryServicesService } from './library-services.service';

describe('LibraryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryServicesService = TestBed.get(LibraryServicesService);
    expect(service).toBeTruthy();
  });
});
