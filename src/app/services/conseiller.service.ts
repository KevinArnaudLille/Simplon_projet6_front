import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conseiller } from '../conseiller';

@Injectable({
    providedIn: 'root'
})
export class ConseillerService {

    private baseUrl = 'http://localhost:8081/api/conseiller';

    constructor(private http: HttpClient) {
        
    }
    getAll(): Observable<Conseiller[]> {
        return this.http.get<Conseiller[]>(`${this.baseUrl}`);
    }
}