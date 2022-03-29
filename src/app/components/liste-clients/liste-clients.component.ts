import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/models/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  conseillers?: Conseiller[];

  constructor(public router: Router, private route: ActivatedRoute, private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    this.conseillerService.getAll().subscribe(data => {
      this.conseillers = data;
      console.log(data);
    })
    console.log(this.router.url.substring(14));
  }
}