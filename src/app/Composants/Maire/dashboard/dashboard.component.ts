import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { StatistiqueComponent } from "../statistique/statistique.component";
import { BanniereComponent } from "../banniere/banniere.component";
import { CardProjetComponent } from "../card-projet/card-projet.component";
import { NotificationComponent } from "../notification/notification.component";
import { ProjectService } from '../../../Services/project.service';  // Assurez-vous d'importer le service

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent, StatistiqueComponent, BanniereComponent, CardProjetComponent, NotificationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private projectService: ProjectService) {}  // Injectez le service

  ngOnInit(): void {
    this.projectService.getProjetCommune().subscribe(
      (projets) => {
        console.log('Projets récupérés:', projets);  // Affichez les projets dans la console
      },
      (error) => {
        console.error('Erreur lors de la récupération des projets:', error);  // Affichez les erreurs éventuelles
      }
    );
  }
}
