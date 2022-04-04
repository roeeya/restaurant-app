import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  create(menu:any){
    return this.http.post(this.endpoint.url + 'menu/',menu);
  }

  getall(){
    return this.http.get(this.endpoint.url + 'menu');
  }

  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'menu/'+ id);
  }
  delete(id: any){
    return this.http.delete(this.endpoint.url + 'menu/'+ id);
  }
  update(id: any, menu: any){
    return this.http.put(this.endpoint.url + 'menu/'+ id,menu);
  }
}
