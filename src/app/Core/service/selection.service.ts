import { Injectable } from "@angular/core";
import { TourismType } from "src/app/admin/tourist-place-creation/tourist-place-creation.component";



@Injectable({
    providedIn:'root'
})
export class SelecttionService{


    touristTypes:TourismType[] =[
        {type:'Natural',value:0},
        {type:'Cultural',value:1},
        {type:'Historical',value:2},
        {type:'Adventure',value:3},
        {type:'Religious',value:4},
        {type:'Urban',value:5},
        {type:'Rural',value:6},
        {type:'Beach',value:7},
        {type:'Mountain',value:8},
      ]

    selected!:TourismType;

}