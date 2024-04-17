import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalStageService {
  private baseUrl = 'http://localhost:8089/api/journal-stage';

  constructor(private http: HttpClient) { }

  generateJournalStageDocument(cin: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/generate/${cin}`, null, { responseType: 'blob' });
  }
}
