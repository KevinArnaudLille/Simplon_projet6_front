import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  conseiller:Conseiller = new Conseiller();
  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    //this.conseillerService.getAll().subscribe(val => console.log(val));
  }
  conseillerLogin() {
    console.log(this.conseiller);
    this.conseillerService.loginConseiller(this.conseiller).subscribe(data=>{
      console.log(data);
      
      alert("Bienvenue")
    },error=>alert("L'un des champs ne correspond pas"))
  }
}
