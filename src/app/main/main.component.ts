import { Component } from '@angular/core';
import { AuthService } from '../authentication/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {



  constructor(private authsserv:AuthService){}
}
