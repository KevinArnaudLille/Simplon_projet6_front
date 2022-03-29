import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'listeClients', component: ListeClientsComponent },
  { path: 'listeComptes', component: ListeComptesComponent},
  { path: '', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
