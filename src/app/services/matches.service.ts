import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private baseUrl="http://localhost:8090/api/test/matches";
  private baseUrlc="http://localhost:8090/api/test/addMatches";
  private baseUrlu="http://localhost:8090/api/test/editMatches";
  private baseUrld="http://localhost:8090/api/test/deleteMatches";

  constructor(private httpClient:HttpClient) { }

  getMatchesList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  
  getMatches(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createMatches(matche: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrlc,matche);
  }

  updateMatches(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrlu}/${id}`, value);
  }

  deleteMatches(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrld}/${id}`, { responseType: 'text' });
  }
}
