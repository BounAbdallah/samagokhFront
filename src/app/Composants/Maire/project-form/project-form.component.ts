import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule],  // Ajout de ReactiveFormsModule ici
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      titre: [''],
      objectif: [''],
      image: [''],
      description: [''],
      attente: [''],
      categorie: [''],
      cible: [''],
      budget: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.projectForm.value);
  }

  onCancel() {
    this.projectForm.reset();
  }
}
