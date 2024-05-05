import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelecttionService } from 'src/app/Core/service/selection.service';
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
    if(this.authServ.formdata)
    {
      this.selectionServ.selected = e.target.value
      console.log(e.target.value);
      this.authServ.formdata.append('TourismType',this.selectionServ.selected.toString());
      console.log('after ',this.authServ.formdata);
      
       this.authServ.Register().subscribe((data)=>{
        console.log('main data',data);
        
  
        this.authServ.AllowAccessToken().subscribe(data=>{
  
          this.authServ.formdata = null
  
          this.router.navigate(['category'])
        })
  
       })

    }else{
      this.selectionServ.selected = e.target.value
      console.log('value',e.target.value);
      this.router.navigate(['category'])
    }
  }
}
