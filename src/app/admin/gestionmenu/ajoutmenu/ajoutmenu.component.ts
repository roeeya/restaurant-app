import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-ajoutmenu',
  templateUrl: './ajoutmenu.component.html',
  styleUrls: ['./ajoutmenu.component.css']
})
export class AjoutmenuComponent implements OnInit {
  myImage: any;
  menu= {
    titre:'',
    description:'',
    prix:0,
    weight:0,
    calories:0
  }

  selectImage(e: any){
    this.myImage = e.target.files[0];

  }
  ajouter(){
    let formData=new FormData();
    formData.append('titre',this.menu.titre);
    formData.append('description',this.menu.description);
    formData.append('prix',this.menu.prix.toString());
    formData.append('calories',this.menu.calories.toString());
    formData.append('weight',this.menu.weight.toString());
    formData.append('img',this.myImage);
    
    this.data.create(formData).subscribe(
      res=>{
        this.router.navigate(['/admin']);
      },
      err=>{
        console.log(err);
      }
    );
  }

  constructor(private data:MenudataService, private router:Router) { }

  ngOnInit(): void {
  }

}
