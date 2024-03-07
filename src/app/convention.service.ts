// convention-form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConventionService {

  private apiUrl = 'http://localhost:8089/api/convention-form';

  constructor(private http: HttpClient) { }

  submitConventionForm(conventionForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, conventionForm);
  }
}
