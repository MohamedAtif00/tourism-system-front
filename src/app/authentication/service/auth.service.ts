import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";
import { GeneralResponse } from "src/app/Core/model/general.response";
import { StudentLoginRequest, DonorLoginRequest } from "../model/Request/login.request";
import { StudentRegister, DonorRegister } from "../model/Request/register.request";
import { AllowAccessResponse } from "../model/Response/allow-access.response";
import { StudentLoginResponse, DonorLoginResponse } from "../model/Response/login.response";
import { StudentRegisterResponse } from "../model/Response/register.response";
import { environment } from "src/environment/environment";
import { UserModel } from "src/app/Core/model/user.model";



@Injectable({
    providedIn:'root'
})
export class AuthService{


    getAllowAccess:string = `${environment.localhost}Authentication/AllowAccess/`
    postStudentLogin:string = `${environment.localhost}Authentication/Login`
    postDonorLogin:string = `${environment.localhost}Authentication/DoctorLogin`
    postStudentRegister:string = `${environment.localhost}Authentication/Register`
    postDoctorRegister:string = `${environment.localhost}Authentication/DoctorRegister`
    getCheckUsername:string = `${environment.localhost}Authentication/CheckUsername/`
    postAdminLogin:string = `${environment.localhost}Authentication/AdminLogin`

     formdata:FormData | null = new FormData();

    user!:UserModel;
    token!:string | null

    constructor(private http:HttpClient){
        this.formdata = null;
        this.token = localStorage.getItem('User_Token_Key')
        if(this.token)
        this.http.get<any>(this.getAllowAccess+this.token).subscribe(data=>{
            this.user = {id:data.userId,username:data.username,email:data.email,role:data.role,token:data.token,tourismType:data.tourismType}
            //console.log('service',this.user);
        })
    }

    init()
    {
        this.token = localStorage.getItem('User_Token_Key')
        if(this.token)
            return this.http.post<any>(this.getAllowAccess , {token:this.token})
        else return null

    }

    GetToken()
    {
        return localStorage.getItem('User_Token_Key');
    }

    SetTokens(token:string)
    {
         localStorage.setItem('User_Token_Key',token)
    }

    StudentLogin(studentInfo:StudentLoginRequest)
    {
        return this.http.post<GeneralResponse<StudentLoginResponse>>(this.postStudentLogin,studentInfo).pipe(map(data=>{
            if(data ) console.log(data);

            if(data.value)
            {
                this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken,tourismType:data.value.type}
                localStorage.setItem('User_Token_Key',data.value.jwtToken)
                this.token =this.GetToken()
            }
            return data
        }));
    }

    Register()
    {
        console.log(this.formdata);
        
        return this.http.post<StudentRegisterResponse>(this.postStudentRegister,this.formdata)
        .pipe(map(data=>{
            this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken,tourismType:data.value.tourismType}
            localStorage.setItem('User_Token_Key',data.value.jwtToken)
            this.token = this.GetToken()



            return data;
        }));
    }

    
    

    // AdminLogin(login:{username:string,password:string})
    // {
    //     return this.http.post<GeneralResponse<DonorLoginResponse>>(this.postAdminLogin,login)
    //     .pipe(
    //         map((data) =>{
    //         if(data) console.log(data);
            

    //         if(data.value)
    //         {
    //             this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken}
    //             localStorage.setItem('User_Token_Key',data.value.jwtToken)
    //             this.token =this.GetToken()
    //         }
    //             return data
    //     })
    //     );
    // }



    AllowAccessToken(): Observable<AllowAccessResponse | null> {

        console.log(this.user.token);
        
        const token = this.GetToken();
      
        if (!token) {
          return of(null); // Return null if no token is available
        }
      
        const url = `${this.getAllowAccess}`;
      
        return this.http.get<AllowAccessResponse>(url+token).pipe(tap(data=>{
            this.user.tourismType = data.tourismType;
        }),
          catchError(error => {
            // Handle errors appropriately (e.g., log the error, display a user-friendly message)
            console.error('Error fetching allow access:', error);
            return throwError(() => new Error('Failed to get allow access')); // Re-throw a user-friendly error
          })
        );
    }
      

    CheckUsrname(username:string)
    {
        return this.http.get<boolean>(this.getCheckUsername+username);
    }

    Logout()
    {
        localStorage.removeItem('User_Token_Key')
        this.user = {id:'',username:'',email:'',role:'',token:'',tourismType:0}
        this.token = null
    }


}