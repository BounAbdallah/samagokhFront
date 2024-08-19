import { PageListeProjetSoumisComponent } from './Composants/Maire/page-liste-projet-soumis/page-liste-projet-soumis.component';
import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component'
import { PageDetailsprojetComponent } from './Composants/Maire/page-detailsprojet/page-detailsprojet.component';
import { PageListeHabitantsComponent } from './Composants/Maire/page-liste-habitants/page-liste-habitants.component';
import { PageListeProjetMairieComponent } from './Composants/Maire/page-liste-projet-mairie/page-liste-projet-mairie.component';

export const routes: Routes = [


  {path: "Dashboard", component: DashboardComponent},//tableau de bord
  {path: "detail-projet", component: PageDetailsprojetComponent},
  { path: "Nos-habitants", component: PageListeHabitantsComponent },
  { path: "Projet-soumis", component: PageListeProjetSoumisComponent },
  { path: "Projet-mairie", component: PageListeProjetMairieComponent },//projets

];
