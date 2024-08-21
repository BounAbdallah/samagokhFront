import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);

  constructor() {}



//recuperation de  projet

getProjetCommune(){
  return this.http.get(`${apiUrl}/projets`);
}


//Ajout de projet

addProjet(projet:any){

  return this.http.post(`${apiUrl}/projets`, projet);

}


//Modification projet

updateProjet(id:any, projet:any){
  return this.http.post(`${apiUrl}/projets/${id}`, projet)
}

//Archive de projet

archiveProjet(id:any){

  return this.http.delete(`${apiUrl}/projets/${id}`);
}



//restauratiuon du projet

restaurerProjet(id:any){

  return this.http.post(`${apiUrl}/projets/${id}restore`, "")

}

// suppresion definitiv du projet

deleteProjet(id:any){

  return this.http.delete(`${apiUrl}/projets/${id}/force-delete`)
}

}
