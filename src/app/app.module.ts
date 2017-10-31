import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { RateService } from './services/rate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    InfiniteScrollModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [
    RateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
