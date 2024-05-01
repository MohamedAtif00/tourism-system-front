import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouristPlaceCreationComponent } from './tourist-place-creation/tourist-place-creation.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { TouristLocationListComponent } from './tourist-location-list/tourist-location-list.component';




@NgModule({
  declarations: [
    TouristPlaceCreationComponent,
    TouristLocationListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule.forChild(),
    BsDatepickerModule,
    HttpClientModule
  ]
})
export class AdminModule { }
