import { Routes } from '@angular/router';
import { RolesComponent } from './Composants/admin/roles/roles.component';
import { ListCommuneComponent } from './Composants/admin/list-commune/list-commune.component';
import { VilleComponent } from './Composants/admin/ville/ville.component';
import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component';
import path from 'path';
import { BaseDashboardComponent } from './base-dashboard/base-dashboard.component';
import { DashbordComponent } from './Composants/admin/dashbord/dashbord.component';

export const routes: Routes = [

{
  path: '',
  component: BaseDashboardComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashbordComponent },
    { path: 'communes', component: ListCommuneComponent },
    { path: 'villes', component: VilleComponent },
    { path: 'roles', component: RolesComponent },
    // Ajoutez d'autres routes enfants ici
  ]
}
 
];
