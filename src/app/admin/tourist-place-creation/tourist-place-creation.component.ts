import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LocationInfoModel } from 'src/app/Core/model/location-info.model';
import { TourismLocationService } from '../service/tourism-location.service';
import { RealLocationModel } from 'src/app/Core/real-location.model';
import { TourismLocation } from '../model/create-tourism-location.request';



export interface TourismType
{
  type:string,
  value:number
}

@Component({
  selector: 'app-tourist-place-creation',
  templateUrl: './tourist-place-creation.component.html',
  styleUrls: ['./tourist-place-creation.component.css']
})
export class TouristPlaceCreationComponent {

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
  selectedOption!: number;
  
  selectedPoint: { latitude: number, longitude: number} | null = null;
  @ViewChild('template') template: any;
  @ViewChild('nearestRestaurant') NearestRestaurant!: ElementRef;
  @ViewChild('nearestMall') NearestMall!: ElementRef;
  @ViewChild('nearestHospital') NearestHospital!: ElementRef;
  @ViewChild('nearestPharmacy') NearestPharmacy!: ElementRef;
  @ViewChild('tourismLocation') TourismLocation!: ElementRef;
  
  modalRef!: BsModalRef;
  map: any;
  marker: any;
  nearestRestaurant!:RealLocationModel;
  nearestMall!:RealLocationModel;
  nearestHospital!:RealLocationModel;
  nearestPharmacy !:RealLocationModel;

  touristPlace: TourismLocation = {
    id:null,
    name: '',
    description: '',
    tourismType: null,
    latitude: null,
    longitude: null,
    file:null,
    nearestRestourant:null,
    nearestMall:null,
    nearestHospital:null,
    nearestPharmacy:null
  };

  constructor(private modalService:BsModalService,private http:HttpClient,private tourismLocationServ:TourismLocationService) { }

  onSubmit() {
    console.log(this.touristPlace);

    const formData: FormData = new FormData();
    formData.append('name', this.touristPlace.name);
    formData.append('description', this.touristPlace.description);
    formData.append('tourismType', this.touristPlace.tourismType?.toString()||'');
    formData.append('latitude', this.touristPlace.latitude?.toString() || '');
    formData.append('longitude', this.touristPlace.longitude?.toString() || '');
    formData.append('NearestRestourant.Description', this.touristPlace.nearestRestourant!.description);
    formData.append('NearestRestourant.Latitude', this.touristPlace.nearestRestourant!.latitude.toString());
    formData.append('NearestRestourant.Longitude', this.touristPlace.nearestRestourant!.longitude.toString());
    formData.append('nearestMall.Description', this.touristPlace.nearestMall!.description);
    formData.append('nearestMall.Latitude', this.touristPlace.nearestMall!.latitude.toString());
    formData.append('nearestMall.Longitude', this.touristPlace.nearestMall!.longitude.toString());
    formData.append('nearestHospital.Description', this.touristPlace.nearestHospital!.description);
    formData.append('nearestHospital.Latitude', this.touristPlace.nearestHospital!.latitude.toString());
    formData.append('nearestHospital.Longitude', this.touristPlace.nearestHospital!.longitude.toString());
    formData.append('nearestPharmacy.Description', this.touristPlace.nearestPharmacy!.description);
    formData.append('nearestPharmacy.Latitude', this.touristPlace.nearestPharmacy!.latitude.toString());
    formData.append('nearestPharmacy.Longitude', this.touristPlace.nearestPharmacy!.longitude.toString());
    formData.append('image', this.touristPlace.file!);



    this.tourismLocationServ.CreateTourismLocation(formData,this.http)
      .subscribe(
        (response:any) => {
          console.log('Tourism place created successfully:', response);
          // Reset the form
          
        },
        (error:any) => {
          console.error('Error creating tourism place:', error);
        }
      );
  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.touristPlace.image = reader.result;
  //     };
  //   }
  // }


  openModalnNearestRestaurant() {
    this.modalRef = this.modalService.show(this.template);
    this.initMap('nearestRestaurant');
  }

  openModalNearestMall() {
    this.modalRef = this.modalService.show(this.template);
    this.initMap('nearestMall');
  }

  openModalnnearestHospital() {
    this.modalRef = this.modalService.show(this.template);
    this.initMap('nearestHospital');
  }

  openModalNearestPharmacy() {
    this.modalRef = this.modalService.show(this.template);
    this.initMap('nearestPharmacy');
  }

  openModalTourismLocation(){
    this.modalRef = this.modalService.show(this.template);
    this.initMap('tourismLocation');
  }




  initMap(location: string) {
    this.map = L.map('map').setView([30.0444, 31.2357], 6); // Initial map center and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add marker on map click
    this.map.on('click', (e: any) => {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker(e.latlng, { draggable: true }).addTo(this.map).bindPopup('Selected Point').openPopup();
      this.selectedPoint = {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng
      };

      this.getLocationInfo(this.selectedPoint.latitude, this.selectedPoint.longitude, location);
    });
  }

  getLocationInfo(latitude: number, longitude: number, location: string) {
    console.log(latitude);
    console.log(longitude);
    
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`;
    this.http.get<any>(url).subscribe(
      (data) => {
        const info = data.address;
        console.log(data);
        
        if (location === 'nearestRestaurant') {
          this.touristPlace.nearestRestourant = {
            latitude: data.lat,
            longitude: data.lon,
            description: data.display_name
          };
          console.log(data.lat);
          console.log(data.lon);
          
          console.log(this.touristPlace.nearestRestourant);
          
          this.NearestRestaurant.nativeElement.value = this.touristPlace.nearestRestourant.description;
        }else if(location === "nearestMall")
        {
          this.touristPlace.nearestMall = {
            latitude: data.lat,
            longitude: data.lon,
            description:data.display_name
          };
          console.log(this.nearestMall);
          
          this.NearestMall.nativeElement.value = this.touristPlace.nearestMall.description;
        }else if(location === "nearestHospital")
        {
          this.touristPlace.nearestHospital = {
            latitude: data.lat,
            longitude: data.lon,
            description:data.display_name
          };
          console.log(this.nearestRestaurant);
          
          this.NearestHospital.nativeElement.value = this.touristPlace.nearestHospital.description;
        }else if(location === "nearestPharmacy")
        {
          this.touristPlace.nearestPharmacy = {
            latitude: data.lat,
            longitude: data.lon,
            description:data.display_name
          };
          console.log(this.nearestPharmacy);
          
          this.NearestPharmacy.nativeElement.value = this.touristPlace.nearestPharmacy.description;
        }else if(location === "tourismLocation")
        {
          
          this.touristPlace.description = data.display_name;
          this.touristPlace.latitude = data.lat;
          this.touristPlace.longitude = data.lon;
          //console.log(this.nearestPharmacy);
          
          //this.TourismLocation.nativeElement.value = this.touristPlace.description;
        }
      },
      (error:any) => {
        console.error('Error getting location info:', error);
      }
    );
  }

  onPointSelected() {
    console.log("Selected Point:", this.selectedPoint);
    // You can access latitude and longitude like this
    if (this.selectedPoint) {
      const latitude = this.selectedPoint.latitude;
      const longitude = this.selectedPoint.longitude;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    }
  }


  onFileSelected(event: any) {
    this.touristPlace.file = event.target.files[0];

  }


  selected(e:any)
  {
    console.log(e.target.value);
    this.touristPlace.tourismType = e.target.value
  }

}
