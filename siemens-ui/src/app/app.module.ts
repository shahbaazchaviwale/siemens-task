import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoughComponentComponent } from './rough-component/rough-component.component';
import { MaterialModule } from 'src/material.module';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RoughComponentComponent,
    HeaderSectionComponent,
    HeaderMenuComponent,
    StatusCardComponent
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
