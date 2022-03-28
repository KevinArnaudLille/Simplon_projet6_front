import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentsComponent } from './app/components/components.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    ConnexionComponent,
    ListeComptesComponent,
    ListeClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
