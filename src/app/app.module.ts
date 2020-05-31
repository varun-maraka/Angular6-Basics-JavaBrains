import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloDateComponent } from './hello-date/hello-date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FirstServiceService } from './first-service.service';
import { SearchSegmentComponent } from './search-segment/search-segment.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { SettingsCompComponent } from './settings-comp/settings-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloDateComponent,
    AddressCardComponent,
    SearchSegmentComponent,
    HomeCompComponent,
    SettingsCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FirstServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
