import { TestBed } from '@angular/core/testing';

import { BookCollectionService } from './book-collection.service';

describe('BookCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookCollectionService = TestBed.get(BookCollectionService);
    expect(service).toBeTruthy();
  });
});
