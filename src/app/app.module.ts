import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloDateComponent } from './hello-date/hello-date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FirstServiceService } from './first-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloDateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FirstServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
