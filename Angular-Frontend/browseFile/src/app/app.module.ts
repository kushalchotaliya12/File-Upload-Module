import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropzoneModule, DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'http://127.0.0.1:5050/upload',
   maxFilesize: 2000,
  //  acceptedFiles: 'tar/*',
   chunkSize: 1000000,
   chunking: true,
   forceChunking: true,
 };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DropzoneModule
  ],
  providers: [{
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
