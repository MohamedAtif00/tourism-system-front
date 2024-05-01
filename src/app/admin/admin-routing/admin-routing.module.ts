import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TouristPlaceCreationComponent } from '../tourist-place-creation/tourist-place-creation.component';
import { TouristLocationListComponent } from '../tourist-location-list/tourist-location-list.component';

const routes:Routes =[
  {path:'',component:TouristPlaceCreationComponent},
  {path:'tourism-location-list',component:TouristLocationListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class AdminRoutingModule { }
