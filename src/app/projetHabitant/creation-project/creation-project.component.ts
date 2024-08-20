

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreationProjectService } from '../../Services/creation-project.service';
import { projetModel } from '../../Models/projet.model';

@Component({
  selector: 'app-creation-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creation-project.component.html',
  styleUrl: './creation-project.component.css',
})
export class CreationProjectComponent implements OnInit {
  // injection de dependance 
  private CreationProjectService = inject(CreationProjectService);

  // declaration des varibles
  project:projetModel={};
  tabprojet:projetModel[]=[];
  isCollapsed = false;
  ngOnInit(): void {

  }

  // methode pour la creation d'un projet 
  ajoutProject(){
    let formdata = new FormData();
    if(this.project.titre && this.project.attente && this.project.budget && this.project.categorie && this.project.cible && this.project.description && this.project.etat && this.project.statut && this.project.photo ){
      formdata.append("titre",this.project.titre);
      formdata.append("attente",this.project.attente);
      formdata.append("budget",this.project.budget);
      formdata.append("categorie",this.project.categorie);
      formdata.append("cible",this.project.cible);
      formdata.append("description",this.project.description);
      formdata.append("etat",this.project.etat);
      formdata.append("statut",this.project.statut);
      formdata.append("photo",this.project.photo) ; 
    }

    this.CreationProjectService.createProjet(formdata).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.data){
          this.project={};
        }
      }
    )
  }



  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  onSubmit() {
    // Logique de soumission du formulaire ici
    console.log(this.project);
  }
}
