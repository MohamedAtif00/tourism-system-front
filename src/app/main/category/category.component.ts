import { Component, OnInit } from '@angular/core';
import { TourismLocationService } from '../service/tourism-location.service';
import { TourismLocation } from 'src/app/admin/model/create-tourism-location.request';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Router } from '@angular/router';
import { SelecttionService } from 'src/app/Core/service/selection.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{


  places!:TourismLocation[];
  
  constructor(private tourismServ:TourismLocationService,private authServ:AuthService,private router:Router,private selection:SelecttionService){}

  
  ngOnInit(): void {
    console.log('category');
    
    if(this.authServ.user)
    {
      this.authServ.AllowAccessToken().subscribe(data=>{
  
  
        console.log(this.authServ.GetToken());
        console.log('befor',this.selection.selected);
        
        
        this.tourismServ.GetAll(this.selection.selected).subscribe(data=>{
    
          console.log(data);
          console.log(data.value);
          
          if(data.value)
            this.places = data.value;
            console.log(this.places);
    
    
            
        });
  
      })

    }


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
