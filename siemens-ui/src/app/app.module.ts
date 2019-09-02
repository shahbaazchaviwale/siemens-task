import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppTitleSectionComponent } from './header-section/app-title-section/app-title-section.component';
import { AppNotificationSectionComponent } from './header-section/app-notification-section/app-notification-section.component';
import { LeftStatusCardComponent } from './status-card/left-status-card/left-status-card.component';
import { RightStatusCardComponent } from './status-card/right-status-card/right-status-card.component';
import { TableListComponent } from './table-list/table-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    HeaderMenuComponent,
    StatusCardComponent,
    HighChartComponent,
    AppTitleSectionComponent,
    AppNotificationSectionComponent,
    LeftStatusCardComponent,
    RightStatusCardComponent,
    TableListComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
