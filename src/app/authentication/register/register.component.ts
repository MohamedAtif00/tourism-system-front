import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { StudentRegister } from '../model/Request/register.request';
import { SelecttionService } from 'src/app/Core/service/selection.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm!:FormGroup;

  constructor(private authServ:AuthService,private router:Router,private http:HttpClient){}


  ngOnInit(): void {
    this.registerForm = new FormGroup
    (
        {
          username: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ])
        }
    );
  }


  CheckUsername():AsyncValidatorFn
  {
    return (AbstractControl):Observable<ValidationErrors|null> =>{
      let username = this.registerForm.controls['username'].value;
      return this.authServ.CheckUsrname(username).pipe(
        map((data)=>{
          console.log(data);
          
          return data?{nameTaken:true}: null
        }),
        catchError(() => of(null))
      );
    }
 }

 submitForm() {
   //if (this.registerFor) {
     console.log(this.registerForm);
     // Perform form submission logic here
     //}
     

     if(this.registerForm.valid)
     {
      //  this.http.get<any>("http://api.ipify.org/?format=json").subscribe(ipresponse =>{
        //this.authServ.Register().subscribe(ipresponse =>{
         
         //let ip  = ipresponse.ip;
         //console.log(ip);
         //let formdata = new FormData();
         let info:StudentRegister = {
           username:this.registerForm.controls['username'].value,
           email:this.registerForm.controls['email'].value,
           password:this.registerForm.controls['password'].value,
          ip:''
         }
         this.authServ.formdata = new FormData();
         this.authServ.formdata.append('email',info.email);
         this.authServ.formdata.append('username',info.username);
         this.authServ.formdata.append('password',info.password);
         //formdata.append('TourismType',this.selection.selected.toString());

      //this.authServ.Register().subscribe((data)=>{
        
       //console.log(data);
  
      //if(data.value) 
          this.router.navigate(['travlere-type-selection']);
  
      // });
    //});
  } 
}


}
