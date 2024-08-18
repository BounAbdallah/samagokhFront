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


  onSubmit(): void {
    console.log(this.myForm);
    
    if (this.myForm.valid) {
      console.log(this.myForm);
      
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
  }
  
 
  
}
