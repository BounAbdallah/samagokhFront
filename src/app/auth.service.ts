import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./Services/apiUrl";

@Injectable(
    {providedIn:'root'}
)

export class AuthService{
    // injection de dependance
    private http = inject(HttpClient);

    // declaration des methodes

    // 1-methode login
    login( identifiant:any){
        // variable en dehors d'une methode on l'appelle avec this
        return this.http.post(`${apiUrl}/login`,identifiant);
    }

    // 2-methode pour la deconnexion
    logout(){
        return this.http.get(`${apiUrl}/logout`);
    }


}