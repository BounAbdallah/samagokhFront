import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { StatistiqueComponent } from "../statistique/statistique.component";
import { BanniereComponent } from "../banniere/banniere.component";
import { CardProjetComponent } from "../card-projet/card-projet.component";
import { NotificationComponent } from "../notification/notification.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent, StatistiqueComponent, BanniereComponent, CardProjetComponent, NotificationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
