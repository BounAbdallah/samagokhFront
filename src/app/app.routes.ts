import { PageListeProjetSoumisComponent } from './Composants/Maire/page-liste-projet-soumis/page-liste-projet-soumis.component';
import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component'
import { PageDetailsprojetComponent } from './Composants/Maire/page-detailsprojet/page-detailsprojet.component';
import { PageListeHabitantsComponent } from './Composants/Maire/page-liste-habitants/page-liste-habitants.component';
import { PageListeProjetMairieComponent } from './Composants/Maire/page-liste-projet-mairie/page-liste-projet-mairie.component';

import { PlateformeComponent } from './Composants/plateforme/plateforme.component';

import { RolesComponent } from './Composants/admin/roles/roles.component';
import { ListCommuneComponent } from './Composants/admin/list-commune/list-commune.component';
import { VilleComponent } from './Composants/admin/ville/ville.component';
// import { DashboardComponent } from './Composants/Maire/dashboard/dashboard.component';
import path from 'path';
import { BaseDashboardComponent } from './base-dashboard/base-dashboard.component';
import { DashbordComponent } from './Composants/admin/dashbord/dashbord.component';
import { Routes } from '@angular/router';

// export const routes: Routes = [

// ];
// import path from 'path';



export const routes: Routes = [

  {path:'SamaGokh',component:PlateformeComponent},

  {path: "Dashboard", component: DashboardComponent},//tableau de bord
  {path: "detail-projet", component: PageDetailsprojetComponent},
  { path: "Nos-habitants", component: PageListeHabitantsComponent },
  { path: "Projet-soumis", component: PageListeProjetSoumisComponent },
  { path: "Projet-mairie", component: PageListeProjetMairieComponent },//projets




// export const routes: Routes = [
//  { path: 'roles', component: RolesComponent},
//  { path: 'dashboard', component: DashboardComponent },
//   //Route par defaut
//   {path:"",pathMatch:'full',redirectTo:'dashboard'},
//   { path: 'communes', component: ListCommuneComponent },
//   { path: 'villes', component:VilleComponent },
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

// >>>>>>> remotes/origin/feature/admin
];
