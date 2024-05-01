import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-how-long',
  templateUrl: './select-how-long.component.html',
  styleUrls: ['./select-how-long.component.css']
})
export class SelectHowLongComponent {


  constructor(private router:Router){}


  selection()
  {
    this.router.navigate(['type-selection']);
  }
}
