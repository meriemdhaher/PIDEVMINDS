// linkedin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
  private readonly linkedInShareUrl = 'https://api.linkedin.com/v2/shares';

  constructor(private http: HttpClient) { }

  shareOffer(offer: any): Observable<any> {
    // Obtenir l'access token pour l'authentification auprès de LinkedIn
    const accessToken = 'YOUR_ACCESS_TOKEN';

    // Créer le corps de la requête pour partager l'offre sur LinkedIn
    const requestBody = {
      "content": {
        "title": offer.title,
        "description": offer.description,
        "submitted-url": offer.url,
        "submitted-image-url": offer.imageUrl
      },
      "owner": "urn:li:person:YOUR_LINKEDIN_MEMBER_ID"
    };

    // Définir les en-têtes pour inclure l'access token dans la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });

    // Effectuer la requête HTTP pour partager l'offre sur LinkedIn
    return this.http.post(this.linkedInShareUrl, requestBody, { headers });
  }
}
