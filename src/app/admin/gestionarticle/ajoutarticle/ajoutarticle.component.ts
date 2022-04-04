import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticledataService } from 'src/app/services/articledata.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
   
};

  myImage: any;
  article= {
    titre:'',
    description:'',
    content:''
  }

  selectImage(e: any){
    this.myImage = e.target.files[0];

  }
  ajouter(){
    let formData=new FormData();
    formData.append('titre',this.article.titre);
    formData.append('description',this.article.description);
    formData.append('content',this.article.content);
    formData.append('image',this.myImage);
    
    this.data.create(formData).subscribe(
      res=>{
        this.router.navigate(['/admin/article']);
      },
      err=>{
        console.log(err);
      }
    );
  }

  constructor(private data:ArticledataService, private router:Router) { }

  ngOnInit(): void {
  }

}
