import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TourismLocationService } from '../service/tourism-location.service';

@Component({
  selector: 'app-tourist-location-list',
  templateUrl: './tourist-location-list.component.html',
  styleUrls: ['./tourist-location-list.component.css']
})
export class TouristLocationListComponent implements OnInit{


  constructor(private http:HttpClient,private tourismLocaationServ:TourismLocationService){}


  ngOnInit(): void {
    this.tourismLocaationServ.GetAll(this.http).subscribe(data=>{
      console.log(data);
      
    })
  }

}
