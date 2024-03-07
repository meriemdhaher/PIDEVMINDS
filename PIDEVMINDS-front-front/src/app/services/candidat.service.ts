import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private apiUrl = 'http://localhost:8089'
  constructor(private http: HttpClient) { }
  
  addCandidat(candidatData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCandidat`, candidatData)
      .pipe(
        catchError((error) => {
          console.error('Error in addCandidat service:', error);
          throw error;
        })
      );
  }
}
