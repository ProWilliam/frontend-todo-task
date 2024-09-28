import { TestBed } from '@angular/core/testing';

import { ConectionWebSocketService } from './conection-web-socket.service';

describe('ConectionWebSocketService', () => {
  let service: ConectionWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
