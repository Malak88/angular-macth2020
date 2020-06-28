import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArbitresService{

  private baseUrl="http://localhost:8090/api/test/arbitres";
  private baseUrlc="http://localhost:8090/api/test/addArbitre";
  private baseUrlu="http://localhost:8090/api/test/editArbitre";
  private baseUrld="http://localhost:8090/api/test/deleteArbitre";
 

  constructor(private httpClient:HttpClient) {}
  

  getArbitresList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  
  getArbitre(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createArbitre(arbitre: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrlc, arbitre);
  }

  updateArbitre(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrlu}/${id}`, value);
  }

  deleteArbitre(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrld}/${id}`, { responseType: 'text' });
  }

  /*getCountries() {
		return this.httpClient.get(`assets/json/countries.json`);
	}*/


}
