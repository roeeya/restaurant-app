import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjoutarticleComponent } from './admin/gestionarticle/ajoutarticle/ajoutarticle.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { ListarticleComponent } from './admin/gestionarticle/listarticle/listarticle.component';
import { UpdatearticleComponent } from './admin/gestionarticle/updatearticle/updatearticle.component';
import { AjoutmenuComponent } from './admin/gestionmenu/ajoutmenu/ajoutmenu.component';
import { GestionmenuComponent } from './admin/gestionmenu/gestionmenu.component';
import { ListmenuComponent } from './admin/gestionmenu/listmenu/listmenu.component';
import { UpdatemenuComponent } from './admin/gestionmenu/updatemenu/updatemenu.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { DetailarticleComponent } from './client/detailarticle/detailarticle.component';
import { DetailmenuComponent } from './client/detailmenu/detailmenu.component';
import { AboutComponent } from './client/homepage/about/about.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { MymenuComponent } from './client/mymenu/mymenu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

{ path: '' , component: ClientComponent , children:[
  {path:'', component:HomepageComponent},
  {path:'detailmenu/:id' , component:DetailmenuComponent},
  {path:'detailarticle/:id',component:DetailarticleComponent},
  {path:'mymenu',component:MymenuComponent},
  {path:'about' , component:AboutComponent}
]},

{ path: 'admin' , canActivate:[AuthGuard], component: AdminComponent , children :[
  
{path: '', component : GestionmenuComponent, children:[
   {path:'',component:ListmenuComponent},
   {path:'ajout',component:AjoutmenuComponent},
   {path:'update/:id',component:UpdatemenuComponent}

]},

{path:'article', component:GestionarticleComponent, children:[
  {path:'',component:ListarticleComponent},
  {path:'ajout',component:AjoutarticleComponent},
  {path:'update/:id',component:UpdatearticleComponent}
]}

]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
