import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./Composants/Maire/side-bar/side-bar.component";
import { BanniereComponent } from "./Composants/Maire/banniere/banniere.component";
import { StatistiqueComponent } from "./Composants/Maire/statistique/statistique.component";
import { CardProjetComponent } from "./Composants/Maire/card-projet/card-projet.component";
import { NotificationComponent } from "./Composants/Maire/notification/notification.component";
import { BarDeRecherheComponent } from "./Composants/Maire/bar-de-recherhe/bar-de-recherhe.component";
import { DetailsProjetComponent } from "./Composants/Maire/details-projet/details-projet.component";
import { CommentaireComponent } from "./Composants/Maire/commentaire/commentaire.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, BanniereComponent, StatistiqueComponent, CardProjetComponent, NotificationComponent, BarDeRecherheComponent, DetailsProjetComponent, CommentaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'samagokhFront';
}
