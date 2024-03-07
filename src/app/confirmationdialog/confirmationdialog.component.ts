import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmationdialog',
  template: `
  <h2>Détails du formulaire</h2>
  <p>Nom: {{ data.details.nom }}</p>
  <p>Prénom: {{ data.details.prenom }}</p>
  <p>Nom de l'entreprise: {{ data.details.nomEntreprise }}</p>
  <p>Période de stage: {{ data.details.periodeStage }}</p>
  <!-- Ajoutez d'autres champs si nécessaire -->
`,
})
export class ConfirmationdialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
