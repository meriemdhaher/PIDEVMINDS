// convention.component.ts
import { Component } from '@angular/core';
import { ConventionService } from '../convention.service';
import { DialogService } from '../dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css'],
  providers: [DialogService],
})
export class ConventionComponent {
  cin: string = '';
  nomEntreprise: string = '';
  periodeComplete: string = '';
  startDate: string = ''; // Ajout de la propriété startDate
  endDate: string = '';   // Ajout de la propriété endDate
  conventionForm = {
    cin: '',
    nomEntreprise: '',
    startDate: '',  // Ajout de la propriété startDate
    endDate: ''     // Ajout de la propriété endDate
  };
  confirmationDetails: {
    cin: number,
    nom: string,
    prenom: string,
    nomEntreprise: string,
    periodeComplete: string,
  } | null = null;

  conventionCompleted: boolean = false; // Déclaration de la propriété ici

  constructor(
    private conventionService: ConventionService,
    private dialogService: DialogService,
    private notificationService: NotificationService 
  ) {}

  submitForm(): void {
    console.log('Submit form started');
    
    if (this.startDate && this.endDate) {
      this.periodeComplete = `À partir de la date ${this.startDate} jusqu'à la date de ${this.endDate}`;
    }
  
    // Mettre à jour la période de stage
    this.conventionForm.startDate = this.startDate;
    this.conventionForm.endDate = this.endDate;
    const conventionForm = {
      cin: this.cin,
      nomEntreprise: this.nomEntreprise,
      periodeStage: this.periodeComplete, // Mettre à jour la période de stage ici
    };
  
    console.log('Convention form data:', conventionForm);
    this.conventionService.submitConventionForm(conventionForm).subscribe(
      (response) => {
        console.log('Server response:', response);
  
        if (response) {
          console.log('Details received:', response);
  
          this.confirmationDetails = {
            nom: response.nom,
            prenom: response.prenom,
            nomEntreprise: response.nomEntreprise,
            periodeComplete: this.periodeComplete, // Utilisez periodeComplete ici
            cin: response.cin,
          };
          
  
          console.log('Confirmation details:', this.confirmationDetails);
  
          // Afficher la boîte de dialogue modale avec les détails
          this.dialogService.openConfirmationDialog(this.confirmationDetails);
          this.showConventionNotification(response.nom);
          
          // Attendre 5 secondes avant de fermer la boîte de dialogue
          setTimeout(() => {
            this.notificationService.showSuccessNotification(`Convention générée pour ${response.nom}`);
            
            // Fermer la boîte de dialogue modale
            this.dialogService.closeConfirmationDialog();
            
            // Attendre un peu avant d'ouvrir l'étape suivante
            setTimeout(() => {
              // Mettre à jour l'état de l'étape de la convention
              this.conventionCompleted = true;
              
              // Ouvrir l'étape suivante (Journal de Stage)
              this.openJournalStagePopup();
            }, 2000); // 2 secondes en millisecondes
          }, 5000); // 5 secondes en millisecondes
        }
      },
      (error: HttpErrorResponse) => { // Définir explicitement le type d'erreur ici
        console.error('Error submitting form:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Server returned status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }

  private showConventionNotification(nom: string): void {
    this.notificationService.showSuccessNotification(`Convention générée pour ${nom}`);
  }

  private openJournalStagePopup(): void {
    // Votre code pour ouvrir la fenêtre modale du journal de stage
    // ...
  }
}

  