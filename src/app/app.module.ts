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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingChile1ProfileComponent } from './setting-chile1-profile/setting-chile1-profile.component';
import { SettingChild2ContactComponent } from './setting-child2-contact/setting-child2-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloDateComponent,
    AddressCardComponent,
    SearchSegmentComponent,
    HomeCompComponent,
    SettingsCompComponent,
    PageNotFoundComponent,
    SettingChile1ProfileComponent,
    SettingChild2ContactComponent
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
