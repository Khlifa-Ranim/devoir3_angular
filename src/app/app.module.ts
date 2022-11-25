import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfesseursComponent } from './professeurs/professeurs.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';

import { FormsModule } from '@angular/forms';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCoursComponent } from './recherche-par-cours/recherche-par-cours.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfesseursComponent,
    AddProfesseurComponent,
    UpdateProfesseurComponent,
    RechercheParCoursComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCoursComponent,
    UpdateCoursComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
