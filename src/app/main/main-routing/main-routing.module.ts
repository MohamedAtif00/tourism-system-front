import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from '../main.component';
import { CategoryComponent } from '../category/category.component';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { SelectTourismTypeComponent } from '../select-tourism-type/select-tourism-type.component';
import { CategoryCanActivate } from '../gaurd/category-cancaectivate.guard';
import { SelectHowLongComponent } from '../select-how-long/select-how-long.component';
import { SelectTravelerTypeComponent } from '../select-traveler-type/select-traveler-type.component';
import { SelectWhoComingComponent } from '../select-who-coming/select-who-coming.component';

const routes:Routes =[
  {path:'',component:MainComponent,children:[
    {path:'',component:HomeComponent},
    {path:'tourism-details',component:LocationDetailsComponent,canActivate:[CategoryCanActivate]},
    {path:'category',component:CategoryComponent,canActivate:[CategoryCanActivate]},
    {path:'type-selection',component:SelectTourismTypeComponent},
    {path:'who-selection',component:SelectWhoComingComponent},
    {path:'travlere-type-selection',component:SelectTravelerTypeComponent},
    {path:'how-long-selection',component:SelectHowLongComponent},
  ]},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class MainRoutingModule { }
