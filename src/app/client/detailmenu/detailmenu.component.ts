import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.component.html',
  styleUrls: ['./detailmenu.component.css']
})
export class DetailmenuComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute , private data:MenudataService , public endpoint:EndpointService) { }
 id:any;
 menu:any;
  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe(
      res=>{
        this.menu=res
      }
    )
  }

}
