import { Component, Input } from '@angular/core';
<<<<<<< Updated upstream
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> Stashed changes

@Component({
  selector: 'app-demande-stage',
  templateUrl: './demande-stage.component.html',
  styleUrls: ['./demande-stage.component.css']
})
export class DemandeStageComponent {
  @Input() studentInfo: any;

  constructor(private modalService: NgbModal, private httpClient: HttpClient) { }

  open(content: NgbModal) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  generateAndShowPdf() {
    // Vérifiez si les informations de l'étudiant existent
    if (this.studentInfo) {
      // Générez le PDF avec les informations de l'étudiant
      const pdfContent = `ID: ${this.studentInfo.Id}\nNom: ${this.studentInfo.Nom}\nPrénom: ${this.studentInfo.Prenom}\nCIN: ${this.studentInfo.Cin}\nNuméro: ${this.studentInfo.Numero}\nEmail: ${this.studentInfo.Email}\nEvenement: ${this.studentInfo.Evenement}`;

<<<<<<< Updated upstream
      // Utilisez jsPDF pour générer un PDF
      const pdf = new jsPDF();
      pdf.text(pdfContent, 10, 10);
      
      // Enregistrez ou affichez le PDF généré
      pdf.save('demande-de-stage.pdf'); // Pour télécharger le PDF
      // Ou affichez-le dans une nouvelle fenêtre
      // pdf.output('dataurlnewwindow');

=======
      // Logique pour générer et afficher le PDF
      console.log('PDF Content:', pdfContent);

      // Vous pouvez utiliser une bibliothèque ou un service pour générer le PDF ici
      // Par exemple, jspdf, pdfmake, etc.
>>>>>>> Stashed changes
    } else {
      console.log('Les informations de l\'étudiant n\'existent pas.');
    }
  }
}
