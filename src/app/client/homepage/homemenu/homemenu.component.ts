import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css']
})
export class HomemenuComponent implements OnInit {
menus:any;
  constructor( private data:MenudataService, public endpoint: EndpointService ) { }

  ngOnInit(): void {
   this.data.getall().subscribe(
     res=>{
      this.menus = res;
     },
     err=>{

     }
   );
  }

}
