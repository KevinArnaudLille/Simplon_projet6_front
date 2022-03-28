import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';
@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  conseillers?: Conseiller[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    this.conseillerService.getAll().subscribe(data=>{
      this.conseillers = data;
      console.log(data);
    })
  }
  }

