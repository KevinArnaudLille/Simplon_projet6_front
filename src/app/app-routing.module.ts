import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { component } from 'vue/types/umd';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'listeClients',
  component: ListeClientsComponent,
  children:[
    {  
      path:':conseilllerIdentifiant',
      component:ListeClientsComponent
    }
  ]
},
  { path: 'listeComptes', component: ListeComptesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
