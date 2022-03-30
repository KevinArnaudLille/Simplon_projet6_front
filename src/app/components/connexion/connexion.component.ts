import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/models/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  login:string = "";
  mdp:string = "";
  

  constructor(private conseillerService: ConseillerService,public router: Router) { }

  ngOnInit(): void {
  }

  conseillerLogin() {
    this.conseillerService.getConseillerByLoginAndPassword(this.login,this.mdp).subscribe(
      data => {
        console.log(data);
        this.conseillerService.setConnectedConseiller(data)
        this.router.navigate([`/listeClients/${this.conseillerService.getConnectedConseiller().id}`])
      }
      )
  }

}