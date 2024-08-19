import { Component,OnInit } from '@angular/core';
import { VilleService } from '../../../Services/adminServices/ville/ville.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';
import { log } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Ville {
  id: number;
  libelle: string;
  description: string; 
}

@Component({
  selector: 'app-ville',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './ville.component.html',
  styleUrl: './ville.component.css'
})
export class VilleComponent {

  myForm: FormGroup;
  villes: Ville[] = [];
  newVille: string = '';
  isEditMode: boolean = false;

  
  constructor(private villeService: VilleService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

 

  ngOnInit(): void {
    this.fetchVilles();
  }

  fetchVilles(){
    this.villeService.getVilles().subscribe(
      (response:any)=>{
        console.log(response.data);
        this.villes = response;
        if(response.data)
          this.villes = response.data;
          },
          (error:any)=>{
            console.log(error);
      }
    )
  }


  deleteVille(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce rôle?')) { // Ajouter une confirmation avant la suppression
      this.villeService.deleteVille(id).subscribe(
        () => this.fetchVilles(),  // Recharger les rôles après la suppression
        error => console.error('Erreur lors de la suppression du rôle', error)
      );
    }
  }


  // onSubmit(): void {
  //   console.log(this.myForm);
    
  //   if (this.myForm.valid) {
  //     console.log(this.myForm);
      
  //     const newVille = this.myForm.value;
  //     this.villeService.addVille(newVille).subscribe(
  //       response => {
  //         console.log('Ville ajoutée avec succès:', response);  // Ajoutez ceci
  //         this.fetchVilles();  // Recharger la liste des villes après l'ajout
  //         this.myForm.reset();  // Réinitialiser le formulaire après l'ajout
  //       },
  //       error => {
  //         console.error('Erreur lors de l\'ajout de la ville', error);
  //       }
  //     );
  //   }
  // }
  
  onSubmit(): void {
    if (this.myForm.valid) {
      const newVille = this.myForm.value;
      const currentVilleId = this.villeService.getCurrentVilleId();
  
      if (currentVilleId) {
        // Si une ville est en cours de modification, on fait une mise à jour
        this.villeService.updateVille(currentVilleId, newVille).subscribe(
          response => {
            console.log('Ville modifiée avec succès:', response);
            this.fetchVilles();  // Recharger la liste des villes après la modification
            this.myForm.reset();  // Réinitialiser le formulaire après la modification
            // this.villeService.setCurrentVilleId(id: number | null);
          },
          error => {
            console.error('Erreur lors de la modification de la ville', error);
          }
        );
      } else {
        // Sinon, on fait un ajout
              const newVille = this.myForm.value;
          this.villeService.addVille(newVille).subscribe(
         response => {
          console.log('Ville ajoutée avec succès:', response);  // Ajoutez ceci
          this.fetchVilles();  // Recharger la liste des villes après l'ajout
          this.myForm.reset();  // Réinitialiser le formulaire après l'ajout
        },
        error => {
          console.error('Erreur lors de l\'ajout de la ville', error);
        }
      );
    }
    this.isEditMode = false;
    }
  }
  
  //fonction pour ouvrire le modal popup avec les valeur à modifier
  editVille(ville: Ville): void {
    this.myForm.patchValue({
      libelle: ville.libelle,
      description: ville.description,
    });
    this.villeService.setCurrentVilleId(ville.id); // Stocker l'ID de la ville à modifier
    this.isEditMode = true;
  }
  
}
