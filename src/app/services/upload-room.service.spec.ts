import { TestBed, inject } from '@angular/core/testing';

import { UploadRoomService } from './upload-room.service';

describe('UploadRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadRoomService]
    });
  });

  it('should be created', inject([UploadRoomService], (service: UploadRoomService) => {
    expect(service).toBeTruthy();
  }));
});
