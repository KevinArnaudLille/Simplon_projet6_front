import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-liste-comptes',
  templateUrl: './liste-comptes.component.html',
  styleUrls: ['./liste-comptes.component.scss']
})
export class ListeComptesComponent implements OnInit {

  conseiller?: Conseiller[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.conseillerService.getAll().subscribe(data=>{
      this.conseiller = data;
    })
  }

}
