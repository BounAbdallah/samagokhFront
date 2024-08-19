import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { CardProjetMairieComponent } from "../card-projet-mairie/card-projet-mairie.component";

@Component({
  selector: 'app-page-liste-projet-mairie',
  standalone: true,
  imports: [SideBarComponent, CardProjetMairieComponent],
  templateUrl: './page-liste-projet-mairie.component.html',
  styleUrl: './page-liste-projet-mairie.component.css'
})
export class PageListeProjetMairieComponent {

}
