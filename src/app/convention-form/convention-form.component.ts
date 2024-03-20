// convention-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ConventionService } from '../convention.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convention-form',
  templateUrl: './convention-form.component.html',
  styleUrls: ['./convention-form.component.css']
})
// convention-form.component.ts
export class ConventionFormComponent implements OnInit {
  conventionDetails: any;
  cin: number;

  constructor(
    private route: ActivatedRoute,
    private conventionService: ConventionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cin = +params['cin'];
      this.conventionService.getConventionForm(this.cin).subscribe(
        (data: any) => {
          this.conventionDetails = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération du formulaire de convention :', error);
        }
      );
    });
  }

  validerConvention(): void {
    this.conventionService.validerConvention(this.conventionDetails.id).subscribe(
      () => {
        console.log('Convention validée avec succès.');
      },
      (error) => {
        console.error('Erreur lors de la validation de la convention :', error);
      }
    );
  }

  refuserConvention(): void {
    this.conventionService.refuserConvention(this.conventionDetails.id).subscribe(
      () => {
        console.log('Convention refusée avec succès.');
      },
      (error) => {
        console.error('Erreur lors du refus de la convention :', error);
      }
    );
  }
}

