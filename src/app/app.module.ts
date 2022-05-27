import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {PersonCardComponent} from './components/person-card/person-card.component';
import {CoreModule} from './core/core.module';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule, BrowserAnimationsModule, CoreModule],
  declarations: [AppComponent, PersonCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
