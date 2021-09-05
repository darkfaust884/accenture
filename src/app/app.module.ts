import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/app/material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BriefcaseAggressiveComponent } from './briefcase-aggressive/briefcase-aggressive.component';
import { BriefcaseModerateComponent } from './briefcase-moderate/briefcase-moderate.component';
import { BriefcaseConservativeComponent } from './briefcase-conservative/briefcase-conservative.component';
import { PersonalAreaAggressiveComponent } from './personal-area-aggressive/personal-area-aggressive.component';
import { PersonalAreaConservativeComponent } from './personal-area-conservative/personal-area-conservative.component';
import { PersonalAreaModerateComponent } from './personal-area-moderate/personal-area-moderate.component';
import { MenuComponent } from './menu/menu.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';



@NgModule({
  declarations: [
    AppComponent,
    PersonalAreaComponent,
    BriefcaseAggressiveComponent,
    BriefcaseModerateComponent,
    BriefcaseConservativeComponent,
    PersonalAreaAggressiveComponent,
    PersonalAreaConservativeComponent,
    PersonalAreaModerateComponent,
    MenuComponent,
    NewsFeedComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    CdkAccordionModule,
    NgbModule,
    ChartsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
