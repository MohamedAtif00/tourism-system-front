import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "src/app/authentication/service/auth.service";



@Injectable({
    providedIn:'root'
})
export class CategoryCanActivate implements CanActivate{


    constructor(private authServ:AuthService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authServ.token) {
            return this.authServ.AllowAccessToken().pipe(
              map(data => {
                if (data?.role.toLowerCase() === 'user') {
                  return true; // Allow navigation
                } else {
                  // Redirect to a different route if not authorized
                  //this.router.navigate(['travlere-type-selection']);
                  return this.router.createUrlTree(['/auth', 'login']);
                }
              })
            );
          } else {
            // Redirect to login page if token is not available
            return this.router.createUrlTree(['/auth', 'login']);
          }
    }


}