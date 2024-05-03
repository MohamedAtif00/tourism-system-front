import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environment/environment";
import { TourismLocation } from "../model/create-tourism-location.request";
import { GeneralResponse } from "src/app/Core/model/general.response";


@Injectable({
    providedIn: 'root'
})
export class TourismLocationServicee{


    selectedLocation!:TourismLocation;

    postCreateTourismLocation:string = `${environment.localhost}TourismLocation/CreateTourismLocation`
    getAll:string = `${environment.localhost}TourismLocation/GetAll`
    changeImage:string = `${environment.localhost}TourismLocation/UpdateImage`
    constructor(){}


    CreateTourismLocation(request:FormData,http:HttpClient)
    {
        return http.post(this.postCreateTourismLocation,request);
    }

    GetAll(http:HttpClient)
    {
        return http.get<GeneralResponse<TourismLocation[]>>(this.getAll);
    }

    ChangeImage(http:HttpClient,id:string,file:File)
    {
        let formdata = new FormData();
        formdata.append('locationId',id);
        formdata.append('requst',file);
        return http.post<any>(this.changeImage,formdata);
    }


}