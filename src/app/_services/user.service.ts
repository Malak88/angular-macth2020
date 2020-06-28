import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicArbitre(): Observable<any> {
    return this.http.get(API_URL + 'arbitres');
  }

  getPublicMatches(): Observable<any> {
    return this.http.get(API_URL + 'matches');
  }

  getPublicEquipes(): Observable<any> {
    return this.http.get(API_URL + 'equipes');
  }
}