import { TestBed } from '@angular/core/testing';

import { FieldMessagesService } from './field-messages.service';

describe('FieldMessagesService', () => {
  let service: FieldMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
