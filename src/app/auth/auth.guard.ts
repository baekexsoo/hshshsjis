import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    if(this.isAuthenticated()){// if user is authenficated
      return true;
    } else {
      this.router.navigate(['/home']);
    }
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    // verifier si le local storage currentUser exist
    if(sessionStorage.getItem("compte")){
        // console.log("isAuthenticated true !");
        return true;
    } else {
        // console.log("isAuthenticated false !");
        return false;
    }
}
}
//