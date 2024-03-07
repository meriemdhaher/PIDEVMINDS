import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantService } from 'src/app/etudiant.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
  etudiants: Etudiant[]; // Utilisez un tableau pour stocker les données

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private etudiantService: EtudiantService,
    private router: Router,
    private notificationService: NotificationService
  ) {}
  

  ngOnInit() {
    this.reloadData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reloadData() {
    this.etudiantService.getEtudiantList().pipe(takeUntil(this.destroy$))
      .subscribe(
        (etudiants) => {
          this.etudiants = etudiants; // Affectez à la variable tableau
        },
        (error) => {
          console.error('Error loading etudiants:', error);
        }
      );
  }

  etudiantDetails(etudiantId: number): void {
    this.router.navigate(['/details', etudiantId]);
  }

  deleteEtudiant(etudiantId: number): void {
    this.etudiantService.deleteEtudiant(etudiantId).pipe(
      switchMap(() => this.etudiantService.getEtudiantList())
    ).subscribe(
      (etudiants) => {
        this.etudiants = etudiants; // Affectez à la variable tableau
        console.log('Etudiant deleted successfully');
      },
      (error) => {
        console.error('Error deleting etudiant:', error);
      }
    );
  }
  showConventionNotification(nomEtudiant: string): void {
    this.notificationService.showSuccessNotification(`Le formulaire de convention a été généré par ${nomEtudiant}`);
  }
}
