import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoughComponentComponent } from './rough-component/rough-component.component';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RoughComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
