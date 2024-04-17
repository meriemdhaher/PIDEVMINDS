import { ActivatedRoute, Router } from '@angular/router';
import { ConventionService } from '../convention.service';
import { NotificationService } from '../notification.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-convention-form',
  templateUrl: './convention-form.component.html',
  styleUrls: ['./convention-form.component.css']
})
export class ConventionFormComponent implements OnInit {
  conventionDetails: any;
  cin: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conventionService: ConventionService,
    private notificationService: NotificationService,
 
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cin = +params['cin'];
      this.conventionService.getConventionForm(this.cin).subscribe(
        (data: any) => {
          this.conventionDetails = data;
          console.log(this.conventionDetails); // Affichez les données reçues pour vérification
        },
        (error) => {
          console.error('Erreur lors de la récupération du formulaire de convention :', error);
        }
      );
    });
  }
  
  
  

  validateConvention(cin: number): void {
    this.conventionService.validerConvention(cin).subscribe(
      () => {
        this.notificationService.showSuccessNotification(`La convention a été validée avec succès.`);
        this.router.navigate(['/etudiant-list']); // Navigation vers la liste des étudiants
        
      },
      (error: any) => {
        console.error('Erreur lors de la validation de la convention :', error);
        this.notificationService.showErrorNotification(`Erreur lors de la validation de la convention.`);
      }
    );
  }
  
  rejectConvention(cin: number): void {
    this.conventionService.rejectConvention(cin).subscribe(
      () => {
        this.notificationService.showSuccessNotification(`La convention a été refusée avec succès.`);
        this.router.navigate(['/etudiant-list']); // Navigation vers la liste des étudiants
       
      },
      (error: any) => {
        console.error('Erreur lors du refus de la convention :', error);
        this.notificationService.showErrorNotification(`Erreur lors du refus de la convention.`);
      }
    );
  }
  
}
