import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-traveler-type',
  templateUrl: './select-traveler-type.component.html',
  styleUrls: ['./select-traveler-type.component.css']
})
export class SelectTravelerTypeComponent {




  constructor(private router:Router){}
  selection()
  {
    this.router.navigate(['/who-selection']);
  }
}
