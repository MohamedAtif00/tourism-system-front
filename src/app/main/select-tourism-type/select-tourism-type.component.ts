import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelecttionService } from 'src/app/Core/service/selection.service';

@Component({
  selector: 'app-select-tourism-type',
  templateUrl: './select-tourism-type.component.html',
  styleUrls: ['./select-tourism-type.component.css']
})
export class SelectTourismTypeComponent {



  constructor(public selectionServ:SelecttionService,private router:Router){}



  selected(e:any)
  {
    this.selectionServ.selected = e.target.value
    this.router.navigate(['auth','register'])
  }
}
