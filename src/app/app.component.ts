import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { UploadRoomService } from './services/upload-room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logoUrl: String;
  roomImgUrl: String;
  plankImgUrl: String;
  plankName: String;
  plankWidth: Number;
  partnerId: String;
  fileToUpload: File = null;
  loading: Boolean = false;
  deviceInfo: any = null;
  detailLink: string;
  errorFlag: Boolean = false;
  errorMsg: string;
  constructor(public _uploadRoom: UploadRoomService) {
    this.logoUrl = environment.LOGO_URL;
    this.roomImgUrl = environment.ROOM_IMG_URL;
    this.plankImgUrl = environment.PLANK_IMG_URL;
    this.plankName = environment.PLANK_NAME;
    this.plankWidth = environment.PLANK_WIDTH;
    this.partnerId = environment.PARTNER_ID;
    this.detailLink = environment.DETAIL_LINK;
  }
  handleFileInput(files: FileList) {
    this.loading = true;
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      this._uploadRoom.postFile(this.fileToUpload).subscribe((data: any) => {
        // this.loading = false;
        if (data.IsSuccess) {
          this.roomImgUrl = data.SuperimposeImageUrl;
        } else {
          this.errorFlag = true;
          this.errorMsg = data.ErrorMessage;
        }
      }, error => {
        console.log(error);
      });
    }
  }
  onLoaded() {
    this.loading = false;
  }
  gotoDetail() {
    window.location.href = this.detailLink;
  }
}
