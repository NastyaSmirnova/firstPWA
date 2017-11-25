import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment';

import {
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ImgcardComponent } from './imgcard/imgcard.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgcardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
