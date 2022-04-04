import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private endpoint:EndpointService) { }
 register(admin:any){
   return this.http.post(this.endpoint.url + 'admin',admin);

}

login(log:any){
  return this.http.post(this.endpoint.url + 'admin/login',log);
}

isLoggedIn(){
  let token = localStorage.getItem('pizzatoken');
  if(token){
    return true;}
    else{
      return false;
    }
  }
}
