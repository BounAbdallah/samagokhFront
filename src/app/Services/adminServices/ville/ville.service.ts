import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private apiUrl='http://127.0.0.1:8000/api'

  constructor(private http : HttpClient) { }

  getVilles():Observable<any>{
    return this.http.get(`${this.apiUrl}/villes`);
  }

  deleteVille(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/villes/${id}`);
   }

   addVille(ville: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/villes`, ville);
  }
}
