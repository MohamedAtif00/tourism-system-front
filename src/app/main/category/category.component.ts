import { Component, OnInit } from '@angular/core';
import { TourismLocationService } from '../service/tourism-location.service';
import { TourismLocation } from 'src/app/admin/model/create-tourism-location.request';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{


  places!:TourismLocation[];
  
  constructor(private tourismServ:TourismLocationService,private authServ:AuthService,private router:Router){}

  
  ngOnInit(): void {
    this.authServ.AllowAccessToken().subscribe(data=>{

      console.log(this.authServ.GetToken());
      
      this.tourismServ.GetAll(this.authServ.user.tourismType).subscribe(data=>{
  
        console.log(data);
        console.log(data.value);
        
        if(data.value)
          this.places = data.value;
          console.log(this.places);
  
  
          
      });

    })
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
    this.tourismServ.selectedLocation  = item;

    this.router.navigate(['tourism-details']);
  }


}
