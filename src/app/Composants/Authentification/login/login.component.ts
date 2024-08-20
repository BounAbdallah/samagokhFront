import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../Models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // injection de dependance
  private authService = inject(AuthService);
  private router = inject(Router);


  // declaration des variables

  userObject:UserModel ={};




  // declaration des methodes
  connexion(){
    console.log(this.userObject);
    if(this.userObject.email && this.userObject.password){
      this.authService.login(this.userObject).subscribe(

        (response:any)=>{

          console.log(response.access_token);
          console.log(response.user);
        if(response.user){
          // enregistrement du token dans le localstorage
          localStorage.setItem("token", JSON.stringify(response.access_token));
          localStorage.setItem("user", JSON.stringify(response.user));
          // verifie le role de l'utilisateur
          if(response.user.role=="membre"){
            // redirection vers la route acceuil
            this.router.navigateByUrl("/acceuil")
          } else{
            // redirection vers la route livre
              this.router.navigateByUrl("/livre");
          }
        }


        }

      );



    }

  }



}
