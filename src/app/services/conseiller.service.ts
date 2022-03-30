import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conseiller } from '../models/conseiller';

@Injectable({
    providedIn: 'root'
})
export class ConseillerService {

    private baseUrl = 'http://localhost:9000/api/conseiller?';

    private connectedConseiller: Conseiller = new Conseiller;

    constructor(private http: HttpClient) {
        
    }

    getConseillerByLoginAndPassword(login:string,mdp:string):Observable<Conseiller>{
        return this.http.get<Conseiller>(`
        ${this.baseUrl}login=${login}&mdp=${mdp}
        `)
    }

    setConnectedConseiller(conseiller:Conseiller){
        this.connectedConseiller = conseiller;
    }

    getConnectedConseiller():Conseiller{
        return this.connectedConseiller;
    }
}