import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private apiUrl = 'http://localhost:8089'
  constructor(private http: HttpClient) { }
  
  addCandidature(candidatureData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCand`, candidatureData);
}
updateCandidature(idCandidature: number, candidatureData: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/updateCand/${idCandidature}`, candidatureData);
}
getListCandidature(): Observable<any> {
  return this.http.get(`${this.apiUrl}/getAllCand`);
}
getCandidatureById(idCandidature: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/getCandById/${idCandidature}`);
}

deleteCandidatureById(idCandidature: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/deleteCand/${idCandidature}`);
}
getCandidaturesByFavorableStatus(): Observable<any> {
  return this.http.get(`${this.apiUrl}/getCandByFavorableStatus`);
}

}
