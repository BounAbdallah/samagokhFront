import { Component, inject, OnInit } from '@angular/core';
import { CreationProjectService } from '../../Services/creation-project.service';
import { projetModel } from '../../Models/projet.model';

@Component({
  selector: 'app-liste-projet-habitant',
  standalone: true,
  imports: [],
  templateUrl: './liste-projet-habitant.component.html',
  styleUrl: './liste-projet-habitant.component.css'
})
export class ListeProjetHabitantComponent implements OnInit{
  // injection de dependance
  private projectServce = inject(CreationProjectService);
  // declaration des variables
  tabprojet:projetModel[]=[];
  projetObject:projetModel ={}
  ngOnInit(): void {
    this.fetchprojet;

  }

  // fonction pour la recuperation des projets
fetchprojet(){
  this.projectServce . getAllProjet().subscribe(
    (response:any)=>{
      console.log(response.data);

      if(response.data){
        this.tabprojet = response.data;
      }
      
    },(error:any)=>{
      console.log(error);
    }
  )
}
  

}
