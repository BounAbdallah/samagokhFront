import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { DetailsProjetComponent } from "../details-projet/details-projet.component";
import { CommentaireComponent } from "../commentaire/commentaire.component";

@Component({
  selector: 'app-page-detailsprojet',
  standalone: true,
  imports: [SideBarComponent, DetailsProjetComponent, CommentaireComponent],
  templateUrl: './page-detailsprojet.component.html',
  styleUrl: './page-detailsprojet.component.css'
})
export class PageDetailsprojetComponent {

}
