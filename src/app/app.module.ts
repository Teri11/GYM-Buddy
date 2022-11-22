import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from './common/common.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
