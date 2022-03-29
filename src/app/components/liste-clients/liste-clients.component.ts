import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  clients?: Client[];

  constructor(public router: Router, private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getOfConseiller(this.router.url.substring(14)).
    subscribe(data => {
      this.clients = data;
      console.log(data);
    })
    console.log(this.router.url.substring(14));
  }
}