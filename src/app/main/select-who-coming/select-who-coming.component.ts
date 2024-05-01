import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-who-coming',
  templateUrl: './select-who-coming.component.html',
  styleUrls: ['./select-who-coming.component.css']
})
export class SelectWhoComingComponent {


  constructor(private router:Router){}

  selection()
  {
    this.router.navigate(['/how-long-selection']);
  }
}
