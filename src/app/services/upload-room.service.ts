import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadRoomService {

  constructor(public httpClient: HttpClient) { }
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = environment.UPLOAD_API_URL;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('partner', environment.PARTNER_ID);
    console.log(fileToUpload);
    return this.httpClient
      .post(endpoint, formData)
      .map((res) => res)
      .catch((e) => console.error('An error occurred:', e.error));
}
}
