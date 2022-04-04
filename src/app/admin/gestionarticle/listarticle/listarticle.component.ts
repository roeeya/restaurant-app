import { Component, OnInit } from '@angular/core';
import { ArticledataService } from 'src/app/services/articledata.service';
import { EndpointService } from 'src/app/services/endpoint.service';


@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {
    articles: any;
  constructor(public data : ArticledataService , public endpoint: EndpointService) { }

  ngOnInit(): void {
    this.data.getall().subscribe(
      res=>{
        this.articles=res;
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
