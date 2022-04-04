import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {
    menus: any;
  constructor(public data : MenudataService , public endpoint: EndpointService) { }

  ngOnInit(): void {
    this.data.getall().subscribe(
      res=>{
        this.menus=res;
      },
      err=>{
        console.log(err);
      }
      
    )
  }
delete(id:any){
  this.data.delete(id).subscribe(
    res=>{
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    }
  );
}

}
