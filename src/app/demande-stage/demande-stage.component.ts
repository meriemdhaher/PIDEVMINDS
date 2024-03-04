// demande-stage.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-demande-stage',
  templateUrl: './demande-stage.component.html',
  styleUrls: ['./demande-stage.component.css']
})
export class DemandeStageComponent {
  cin: number = 0;
  constructor(private dialog: MatDialog, private httpClient: HttpClient, private etudiantService: EtudiantService) { }

  submitDemandeStage() {
    // Envoi du CIN au serveur pour générer le PDF
    this.httpClient.get(`http://localhost:8089/demande-stage/pdf/${this.cin}`, { responseType: 'blob' })
    .subscribe(
      response => {
        console.log('Response received from server:', response);
  

      // Crée un objet blob avec la réponse
      const blob = new Blob([response], { type: 'application/pdf' });

      // Crée un objet URL pour le blob, puis ouvre une nouvelle fenêtre
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl);
      

      // Une fois le PDF généré, fermez le popup
      this.dialog.closeAll();
    },
    error => {
      // Gérez les erreurs ici
      console.error('Error generating PDF', error);
    }
  );
  }
}
