import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import path from 'path';
import { PageDetailsprojetComponent } from './Composants/Maire/page-detailsprojet/page-detailsprojet.component';

export const routes: Routes = [


  {path: "Dashboard", component: DashboardComponent},
  {path: "detail-projet", component: PageDetailsprojetComponent},

];
