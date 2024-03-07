import { Component, OnInit } from '@angular/core';
import { Entretien } from 'src/app/Models/entretien.model';
import { EntretienService } from 'src/app/entretien.service';
import { ExcelService } from 'src/app/excel.service';
@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {
  entretiens: Entretien[] = [];
  nouvelleEntretien: Entretien = new Entretien();
  entretienAModifier: Entretien | null = null;

  constructor(private entretienService: EntretienService,private excelService: ExcelService) { }


  ngOnInit(): void {
    this.getEntretiens();
  }
  exportToExcel(): void {
    this.excelService.exportToExcel(this.entretiens, 'entretiens');
  }

  getEntretiens(): void {
    this.entretienService.getAllEntretiens()
      .subscribe(entretiens => this.entretiens = entretiens);
  }

  ajouterEntretien(): void {
    // Formater les dates au format requis
// Convertit la chaîne de caractères en un objet Date
this.nouvelleEntretien.dateEntretienR = new Date(this.nouvelleEntretien.dateEntretienR);
// Convertit la chaîne de caractères en un objet Date
this.nouvelleEntretien.dateEntretienT = new Date(this.nouvelleEntretien.dateEntretienT);
    

    // Appeler le service pour ajouter l'entretien
    this.entretienService.addEntretien(this.nouvelleEntretien)
      .subscribe(() => {
        this.getEntretiens();
        this.nouvelleEntretien = new Entretien();
      });   
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

  modifierEntretien(entretien: Entretien): void {
    this.entretienAModifier = { ...entretien };
  }

  updateEntretien(): void {
    if (this.entretienAModifier && this.entretienAModifier.idEntretien !== undefined) {
      this.entretienService.updateEntretien(this.entretienAModifier.idEntretien, this.entretienAModifier)
        .subscribe(() => {
          this.getEntretiens();
          this.entretienAModifier = null;
        });
    }
  }

  supprimerEntretien(idEntretien: number | undefined): void {
    if (idEntretien !== undefined) {
      this.entretienService.deleteEntretien(idEntretien)
        .subscribe(() => {
          this.getEntretiens();
        });
    } else {
      console.error('ID de l\'entretien non défini');
    }
  }
}
