import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ArticledataService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  create(blog:any){
    return this.http.post(this.endpoint.url + 'blog/',blog);
  }

  getall(){
    return this.http.get(this.endpoint.url + 'blog');
  }

  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'blog/'+ id);
  }
  delete(id: any){
    return this.http.delete(this.endpoint.url + 'blog/'+ id);
  }
  update(id: any, blog: any){
    return this.http.put(this.endpoint.url + 'blog/'+ id,blog);
  }
}
