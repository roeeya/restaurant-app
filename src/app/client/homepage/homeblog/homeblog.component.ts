import { Component, OnInit } from '@angular/core';
import { ArticledataService } from 'src/app/services/articledata.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-homeblog',
  templateUrl: './homeblog.component.html',
  styleUrls: ['./homeblog.component.css']
})
export class HomeblogComponent implements OnInit {

  articles:any;

  constructor( private data : ArticledataService ,public endpoint:EndpointService) { }

  ngOnInit(): void {

    this.data.getall().subscribe(
      res=>{
       this.articles = res;
      },
      err=>{
 
      }
    );
  }

}
