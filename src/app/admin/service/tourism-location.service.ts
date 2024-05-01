import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environment/environment";
import { TourismLocation } from "../model/create-tourism-location.request";


@Injectable({
    providedIn: 'root'
})
export class TourismLocationService{


    postCreateTourismLocation:string = `${environment.localhost}TourismLocation/CreateTourismLocation`
    getAll:string = `${environment.localhost}TourismLocation`
    constructor(){}


    CreateTourismLocation(request:FormData,http:HttpClient)
    {
        return http.post(this.postCreateTourismLocation,request);
    }

    GetAll(http:HttpClient)
    {
        return http.get<TourismLocation>(this.getAll);
    }
}