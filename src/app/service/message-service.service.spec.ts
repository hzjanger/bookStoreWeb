import { TestBed } from '@angular/core/testing';

import { MessageServiceService } from './message-service.service';

describe('MessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageServiceService = TestBed.get(MessageServiceService);
    expect(service).toBeTruthy();
  });
});
