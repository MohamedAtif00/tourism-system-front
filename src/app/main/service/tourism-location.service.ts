import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GeneralResponse } from "src/app/Core/model/general.response";
import { TourismLocation } from "src/app/admin/model/create-tourism-location.request";
import { environment } from "src/environment/environment";


@Injectable({
    providedIn:'root'
})
export class TourismLocationService{

    selectedLocation!:TourismLocation;

    getAll:string = `${environment.localhost}TourismLocation/GetAll/`
    book:string = `${environment.localhost}TourismLocation/Book`
    constructor(private http:HttpClient){}

    GetAll(type:number)
    {
        return this.http.get<GeneralResponse<TourismLocation[]>>(this.getAll+type);
    }

    Book(body:{userid:string,locationId:string})
    {
        return this.http.post<GeneralResponse<boolean>>(this.book ,body );
    }

}