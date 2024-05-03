import { Component, OnInit } from '@angular/core';
import { TourismLocationService } from '../service/tourism-location.service';
import { TourismLocation } from 'src/app/admin/model/create-tourism-location.request';
import * as L from 'leaflet'
import { AuthService } from 'src/app/authentication/service/auth.service';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit{

  map!:L.Map;
  nearestHotel!:L.Marker;
  nearestRestourant!:L.Marker;
  nearestMall!:L.Marker;
  nearesHospital!:L.Marker;
  nearestPharmacy!:L.Marker;



  constructor(private tourismServ:TourismLocationService,private authServ:AuthService){}
  location!:TourismLocation;

  ngOnInit(): void {
    console.log(this.tourismServ.selectedLocation);
    this.location = this.tourismServ.selectedLocation;
    this.initMap();

    console.log('locationId',this.location.id);
    console.log('user id',this.authServ.user.id);
    console.log(this.location.nearestHotel);
    
  }




  initMap(): void {
    this.map = L.map('map').setView([30.0444, 31.2357], 6); // Initial map center and zoom level
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    
    this.nearestHotel = L.marker([this.location.nearestHotel?.latitude??0, this.location.nearestHotel?.longitude??0]).addTo(this.map).bindPopup('nearestHotel').openPopup();
    this.nearestRestourant = L.marker([this.location.nearestRestourant?.latitude??0, this.location.nearestRestourant?.longitude??0]).addTo(this.map).bindPopup('nearestRestourant').openPopup();
    this.nearestMall = L.marker([this.location.nearestMall?.latitude??0, this.location.nearestMall?.longitude??0]).addTo(this.map).bindPopup('nearestMall').openPopup();
    this.nearesHospital = L.marker([this.location.nearestHospital?.latitude??0, this.location.nearestHospital?.longitude??0]).addTo(this.map).bindPopup('nearestHospital').openPopup();
    this.nearestPharmacy = L.marker([this.location.nearestPharmacy?.latitude??0, this.location.nearestPharmacy?.longitude??0]).addTo(this.map).bindPopup('nearestPharmacy').openPopup();
    

  }

  getBase64Image(file:string | File | null) {
    return 'data:image/jpeg;base64,' + file;
  }


  Book()
  {
      this.tourismServ.Book({userid:this.authServ.user.id,locationId:this.location.id??''}).subscribe(data=>{
        if(data.value)
          alert('good')
      });
  }



}
