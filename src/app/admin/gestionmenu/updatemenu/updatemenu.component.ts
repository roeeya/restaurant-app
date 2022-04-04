import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent implements OnInit {
  myImage: any;
  menu:any= {
    titre:'',
    description:'',
    prix:0,
    weight:0,
    calories:0
  }

  id:any;

  selectImage(e: any){
    this.myImage = e.target.files[0];

  }
modifier(){
  let formData=new FormData();
    formData.append('titre',this.menu.titre);
    formData.append('description',this.menu.description);
    formData.append('prix',this.menu.prix.toString());
    formData.append('calories',this.menu.calories.toString());
    formData.append('weight',this.menu.weight.toString());
   if(this.myImage){
    formData.append('img',this.myImage);
   }
    
    this.data.update(this.id ,formData).subscribe(
      res=>{
        this.router.navigate(['/admin']);
      },
      err=>{
        console.log(err);
      }
    );
}
  constructor(private actRoute:ActivatedRoute ,
              private data:MenudataService,
              private router:Router) { }

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe(
      res=>{
        this.menu = res
      }
    );
  }

}
