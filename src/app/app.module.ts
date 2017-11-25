import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
