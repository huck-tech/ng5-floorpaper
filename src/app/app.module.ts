import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UploadRoomService } from './services/upload-room.service';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [UploadRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
