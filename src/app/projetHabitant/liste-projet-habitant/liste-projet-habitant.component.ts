import { Component, inject, OnInit } from '@angular/core';
import { CreationProjectService } from '../../Services/creation-project.service';
import { projetModel } from '../../Models/projet.model';
import { SideBarComponent } from "../../Composants/Maire/side-bar/side-bar.component";
import { BarDeRecherheComponent } from "../../Composants/Maire/bar-de-recherhe/bar-de-recherhe.component";

@Component({
  selector: 'app-liste-projet-habitant',
  standalone: true,
  imports: [SideBarComponent, BarDeRecherheComponent],
  templateUrl: './liste-projet-habitant.component.html',
  styleUrls: ['./liste-projet-habitant.component.css'],
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
