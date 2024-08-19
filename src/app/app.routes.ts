import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import path from 'path';
import { ListeProjetHabitantComponent } from './projetHabitant/liste-projet-habitant/liste-projet-habitant.component';

export const routes: Routes = [

  {path: "Dashboard", component: DashboardComponent},
  { path: 'affichagedesprojets', component: ListeProjetHabitantComponent },
];
