import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(public auth:AuthService){}
}
