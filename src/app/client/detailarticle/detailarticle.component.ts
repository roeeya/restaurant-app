import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticledataService } from 'src/app/services/articledata.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-detailarticle',
  templateUrl: './detailarticle.component.html',
  styleUrls: ['./detailarticle.component.css']
})
export class DetailarticleComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute , private data:ArticledataService , public endpoint:EndpointService) { }
  id:any;
  article:any;
   ngOnInit(): void {
     this.id=this.actRoute.snapshot.paramMap.get('id');
     this.data.getbyid(this.id).subscribe(
       res=>{
         this.article=res
       }
     )
   }

}
