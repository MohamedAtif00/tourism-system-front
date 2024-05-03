import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TourismLocationServicee } from '../service/tourism-location.service';
import { TourismLocationService } from '../../main/service/tourism-location.service';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { TourismLocation } from '../model/create-tourism-location.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourist-location-list',
  templateUrl: './tourist-location-list.component.html',
  styleUrls: ['./tourist-location-list.component.css']
})
export class TouristLocationListComponent implements OnInit{

  @ViewChild('fileInput') fileInput!: ElementRef;
   places!:TourismLocation[];
  
  constructor(private tourismServ:TourismLocationServicee,private authServ:AuthService,private  http:HttpClient,private router:Router,private service:TourismLocationService){}

  
  ngOnInit(): void {

    console.log(this.authServ.user);
    
    this.tourismServ.GetAll(this.http).subscribe(data=>{
      console.log(data);
      console.log(data.value);
      
      if(data.value)
        this.places = data.value;
        console.log(this.places);


        
    });
  }
  getBase64Image(place:TourismLocation) {
    return 'data:image/jpeg;base64,' + place?.file;
  }

  getTourismType(type: number|null  ): string {
    switch (type) {
      case 0: return 'Natural';
      case 1: return 'Cultural';
      case 2: return 'Historical';
      case 3: return 'Adventure';
      case 4: return 'Religious';
      case 5: return 'Urban';
      case 6: return 'Rural';
      case 7: return 'Beach';
      case 8: return 'Mountain';
      default: return '';
    }
  }

  SelectLocation(item:TourismLocation)
  {
    this.service.selectedLocation  = item;

    this.router.navigate(['tourism-details']);
  }

  item!:TourismLocation;
  openFileInput(item:TourismLocation) {
    this.fileInput.nativeElement.click();

    this.item = item;
  }

  onFileSelected(event: any,) {
    const selectedFile = event.target.files[0];
    // Do something with the selected file
    console.log(selectedFile);
    console.log();
    if(this.item)
    this.tourismServ.ChangeImage(this.http,this.item.id??'',selectedFile).subscribe(data=>{
      console.log(data);
      if(data.value)
        alert('image updated');
    })
  }

}
