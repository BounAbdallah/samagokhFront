import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component'
import { PageDetailsprojetComponent } from './Composants/Maire/page-detailsprojet/page-detailsprojet.component';
import { PageListeHabitantsComponent } from './Composants/Maire/page-liste-habitants/page-liste-habitants.component';

export const routes: Routes = [


  {path: "Dashboard", component: DashboardComponent},
  {path: "detail-projet", component: PageDetailsprojetComponent},
  { path: "Nos-habitants", component: PageListeHabitantsComponent },

];
