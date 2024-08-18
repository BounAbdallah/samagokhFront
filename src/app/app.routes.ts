import { Routes } from '@angular/router';
import { RolesComponent } from './Composants/admin/roles/roles.component';
import { ListCommuneComponent } from './Composants/admin/list-commune/list-commune.component';
import { VilleComponent } from './Composants/admin/ville/ville.component';

export const routes: Routes = [
 { path: 'roles', component: RolesComponent},
  //Route par defaut
  {path:"",pathMatch:'full',redirectTo:'roles'},
  { path: 'communes', component: ListCommuneComponent },
  { path: 'villes', component:VilleComponent },
];
