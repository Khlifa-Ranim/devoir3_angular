import { Injectable } from '@angular/core';
import { Cours } from '../Model/cours.model';
import { professeur } from '../Model/professeur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoursWrapper } from '../Model/CoursWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class ProfesseurService {

  apiURL: string = 'http://localhost:8033/Professeurs_cours/api';
  apiURLCours: string = 'http://localhost:8033/Professeurs_cours/cours';
  professeurs!: professeur[];
  // cours!: Cours[];



  constructor(private http: HttpClient) {
    //console.log("création du service professeurs !")
    /* this.cours = [{ idCours: 1, nomCours: "Math", descriptionCours: "cours du chapitre1 +chapitre2" },
    { idCours: 2, nomCours: "physique", descriptionCours: "cours du chapitre1 +chapitre2" },
    { idCours: 3, nomCours: "Anglais", descriptionCours: "cours du chapitre1 +chapitre2" }]; */

    /*  this.professeurs = [
       { idProf: 1, nomProf: "khlia ", prenomProf: "ranim", cin: 14650181, adresse: "Tunis", dateCreation: new Date("01/14/2011"), cours: { idCours: 1, nomCours: "Math", descriptionCours: "cours du chapitre1 +chapitre2" } },
       { idProf: 2, nomProf: "mariem", prenomProf: "mouhamed ben abid", cin: 14983536, adresse: "Tunis", dateCreation: new Date("12/17/2010"), cours: { idCours: 2, nomCours: "physique", descriptionCours: "cours du chapitre1 +chapitre2" } },
       { idProf: 3, nomProf: "sami", prenomProf: "khlia", cin: 19775321, adresse: "Tunis", dateCreation: new Date("02/20/2020"), cours: { idCours: 3, nomCours: "Anglais", descriptionCours: "cours du chapitre1 +chapitre2" } }
     ]; */

  }

  listeProfesseurs(): Observable<professeur[]> {
    return this.http.get<professeur[]>(this.apiURL);
  }


  ajouterProfesseur(prof: professeur): Observable<professeur> {
    return this.http.post<professeur>(this.apiURL, prof, httpOptions);
  }



  supprimerProfesseur(id: number) {
    //supprimer le produit prod du tableau produits
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); 
}*/


  consulterProfesseur(id: number): Observable<professeur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<professeur>(url);
  }




  trierProffeseur() {
    this.professeurs = this.professeurs.sort((n1, n2) => {
      if (n1.idProf > n2.idProf) {
        return 1;
      }
      if (n1.idProf < n2.idProf) {
        return -1;
      }
      return 0;
    });
  }



  updateProfesseur(prof: professeur): Observable<professeur> {
    return this.http.put<professeur>(this.apiURL, prof, httpOptions);
  }


  listeCours(): Observable<CoursWrapper> {
    return this.http.get<CoursWrapper>(this.apiURLCours);
  }

  rechercherParCours(idCours: number): Observable<professeur[]> {
    const url = `${this.apiURL}/profscou/${idCours}`;
    return this.http.get<professeur[]>(url);
  }

  rechercherParNom(nom: string): Observable<professeur[]> {
    const url = `${this.apiURL}/profsByName/${nom}`;
    return this.http.get<professeur[]>(url);
  }



  ajouterCours(cour: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.apiURLCours, cour, httpOptions);
  }




}
