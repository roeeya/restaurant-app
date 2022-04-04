import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticledataService } from 'src/app/services/articledata.service';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css']
})
export class UpdatearticleComponent implements OnInit {

  myImage: any;
  article:any= {
    titre:'',
    description:'',
    content:''
    
  }

  id:any;

  selectImage(e: any){
    this.myImage = e.target.files[0];

  }
update(){
  let formData=new FormData();
    formData.append('titre',this.article.titre);
    formData.append('description',this.article.description);
    formData.append('content',this.article.content);
   
   if(this.myImage){
    formData.append('image',this.myImage);
   }
    
    this.data.update(this.id ,formData).subscribe(
      res=>{
        this.router.navigate(['/admin/article']);
      },
      err=>{
        console.log(err);
      }
    );
}
  constructor(private actRoute:ActivatedRoute ,
              private data:ArticledataService,
              private router:Router) { }

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe(
      res=>{
        this.article = res
      }
    );
  }

}
