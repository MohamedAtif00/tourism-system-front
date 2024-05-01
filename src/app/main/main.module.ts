import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SelectTourismTypeComponent } from './select-tourism-type/select-tourism-type.component';
import { SelectTourismPlaceComponent } from './select-tourism-place/select-tourism-place.component';
import { MainComponent } from './main.component';

import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { SelectTravelerTypeComponent } from './select-traveler-type/select-traveler-type.component';
import { SelectWhoComingComponent } from './select-who-coming/select-who-coming.component';
import { SelectHowLongComponent } from './select-how-long/select-how-long.component';



@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    SelectTourismTypeComponent,
    SelectTourismPlaceComponent,
    MainComponent,
    HeaderComponent,
    LocationDetailsComponent,
    SelectTravelerTypeComponent,
    SelectWhoComingComponent,
    SelectHowLongComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ]
})
export class MainModule { }
