import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    AnalyticsComponent,
    AnalyticsTableComponent,
    TopNavbarComponent,
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
