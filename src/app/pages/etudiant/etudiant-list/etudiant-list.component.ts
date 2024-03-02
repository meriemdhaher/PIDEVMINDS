import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit{
  etudiants: Observable<Etudiant[]>;

  constructor(private etudiantService: EtudiantService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.etudiants = this.etudiantService.getEtudiantList();
  }
  etudiantDetails(etudiantId: number): void {
    // Logique pour afficher les détails de l'étudiant
    this.router.navigate(['/details', etudiantId]);
  }
  deleteEtudiant(etudiantId: number): void {
    this.etudiantService.deleteEtudiant(etudiantId).subscribe(
      () => {
        console.log('Etudiant deleted successfully');
        this.reloadData(); // Rafraîchit la liste après la suppression
      },
      (error) => console.log(error)
    );
  }
}
