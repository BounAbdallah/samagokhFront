import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from "./Composants/Maire/side-bar/side-bar.component";
import { BanniereComponent } from "./Composants/Maire/banniere/banniere.component";
import { StatistiqueComponent } from "./Composants/Maire/statistique/statistique.component";
import { CardProjetComponent } from "./Composants/Maire/card-projet/card-projet.component";
import { NotificationComponent } from "./Composants/Maire/notification/notification.component";
import { BarDeRecherheComponent } from "./Composants/Maire/bar-de-recherhe/bar-de-recherhe.component";
import { DetailsProjetComponent } from "./Composants/Maire/details-projet/details-projet.component";
import { CommentaireComponent } from "./Composants/Maire/commentaire/commentaire.component";
import { ProjectFormComponent } from './Composants/Maire/project-form/project-form.component';
import { ListeHabitantsComponent } from "./Composants/Maire/liste-habitants/liste-habitants.component";
import { ListeProjetSoumisComponent } from "./Composants/Maire/liste-projet-soumis/liste-projet-soumis.component";
import { CardProjetMairieComponent } from "./Composants/Maire/card-projet-mairie/card-projet-mairie.component";
import { CreationProjectComponent } from './projetHabitant/creation-project/creation-project.component';
import { ListeProjetHabitantComponent } from './projetHabitant/liste-projet-habitant/liste-projet-habitant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, SideBarComponent, BanniereComponent, StatistiqueComponent, CardProjetComponent, NotificationComponent, BarDeRecherheComponent, DetailsProjetComponent, CommentaireComponent, ProjectFormComponent, ListeHabitantsComponent, ListeProjetSoumisComponent, CardProjetMairieComponent,CreationProjectComponent,ListeProjetSoumisComponent,ListeProjetHabitantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'samagokhFront';
}
