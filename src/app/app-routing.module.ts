import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'listeClients', component: ListeClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
