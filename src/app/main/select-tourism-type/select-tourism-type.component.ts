import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelecttionService } from 'src/app/Core/service/selection.service';
import { formdata } from 'src/app/authentication/register/register.component';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-select-tourism-type',
  templateUrl: './select-tourism-type.component.html',
  styleUrls: ['./select-tourism-type.component.css']
})
export class SelectTourismTypeComponent {



  constructor(public selectionServ:SelecttionService,private router:Router,private authServ:AuthService){}



  selected(e:any)
  {
    this.selectionServ.selected = e.target.value
    console.log(e.target.value);
    formdata.append('TourismType',this.selectionServ.selected.toString());
    console.log('after ',formdata);
    
     this.authServ.Register(formdata).subscribe((data)=>{
      console.log('main data',data);
      

      this.authServ.AllowAccessToken().subscribe(data=>{

        this.router.navigate(['category'])
      })

     })

  }
}
