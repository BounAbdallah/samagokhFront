import { Routes } from '@angular/router';
import { RolesComponent } from './Composants/admin/roles/roles.component';
import { ListCommuneComponent } from './Composants/admin/list-commune/list-commune.component';
import { VilleComponent } from './Composants/admin/ville/ville.component';
import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component';

export const routes: Routes = [
 { path: 'roles', component: RolesComponent},
 { path: 'dashboard', component: DashboardComponent },
  //Route par defaut
  {path:"",pathMatch:'full',redirectTo:'dashboard'},
  { path: 'communes', component: ListCommuneComponent },
  { path: 'villes', component:VilleComponent },
 
];
