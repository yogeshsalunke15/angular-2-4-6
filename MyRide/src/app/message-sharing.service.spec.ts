import { TestBed, inject } from '@angular/core/testing';

import { MessageSharingService } from './message-sharing.service';

describe('MessageSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageSharingService]
    });
  });

  it('should be created', inject([MessageSharingService], (service: MessageSharingService) => {
    expect(service).toBeTruthy();
  }));
});
