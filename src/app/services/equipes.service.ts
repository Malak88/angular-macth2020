import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private baseUrl="http://localhost:8090/api/test/equipes";
  private baseUrlc="http://localhost:8090/api/test/addEquipe";
  private baseUrlu="http://localhost:8090/api/test/editEquipe";
  private baseUrld="http://localhost:8090/api/test/deleteEquipe";
 
  constructor(private httpClient:HttpClient) {}

  getEquipesList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  
  getEquipe(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createEquipe(arbitre: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrlc, arbitre);
  }

  updateEquipe(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrlu}/${id}`, value);
  }

  deleteEquipe(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrld}/${id}`, { responseType: 'text' });
  }

}
