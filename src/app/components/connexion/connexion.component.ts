import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    this.conseillerService.getAll().subscribe(val => console.log(val));

  }

}
