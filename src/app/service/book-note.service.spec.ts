import { TestBed } from '@angular/core/testing';

import { BookNoteService } from './book-note.service';

describe('BookNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookNoteService = TestBed.get(BookNoteService);
    expect(service).toBeTruthy();
  });
});
