import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { GestionmenuComponent } from './admin/gestionmenu/gestionmenu.component';
import { AjoutarticleComponent } from './admin/gestionarticle/ajoutarticle/ajoutarticle.component';
import { ListarticleComponent } from './admin/gestionarticle/listarticle/listarticle.component';
import { UpdatearticleComponent } from './admin/gestionarticle/updatearticle/updatearticle.component';
import { AjoutmenuComponent } from './admin/gestionmenu/ajoutmenu/ajoutmenu.component';
import { ListmenuComponent } from './admin/gestionmenu/listmenu/listmenu.component';
import { UpdatemenuComponent } from './admin/gestionmenu/updatemenu/updatemenu.component';

import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterclientComponent } from './client/footerclient/footerclient.component';
import { HeaderclientComponent } from './client/headerclient/headerclient.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { DetailmenuComponent } from './client/detailmenu/detailmenu.component';
import { DetailarticleComponent } from './client/detailarticle/detailarticle.component';
import { HomemenuComponent } from './client/homepage/homemenu/homemenu.component';
import { CoverComponent } from './client/homepage/cover/cover.component';
import { AboutComponent } from './client/homepage/about/about.component';
import { BannerComponent } from './client/homepage/banner/banner.component';
import { HomeblogComponent } from './client/homepage/homeblog/homeblog.component';
import { MymenuComponent } from './client/mymenu/mymenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    GestionarticleComponent,
    GestionmenuComponent,
    AjoutarticleComponent,
    ListarticleComponent,
    UpdatearticleComponent,
    AjoutmenuComponent,
    ListmenuComponent,
    UpdatemenuComponent,
    RegisterComponent,
    LoginComponent,
    FooterclientComponent,
    HeaderclientComponent,
    HomepageComponent,
    DetailmenuComponent,
    DetailarticleComponent,
    HomemenuComponent,
    CoverComponent,
    AboutComponent,
    BannerComponent,
    HomeblogComponent,
    MymenuComponent
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
