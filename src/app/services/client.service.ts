import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private baseUrl = 'http://localhost:9000/api/clientOfConseiller/';

    constructor(private http: HttpClient) {
        
    }
    getOfConseiller(id:string):Observable<Client[]> {
        return this.http.get<Client[]>(`${this.baseUrl}${id}`);
    }
}