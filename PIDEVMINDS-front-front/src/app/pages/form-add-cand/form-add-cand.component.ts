import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Router } from '@angular/router';
import { CandidatureModel } from 'src/app/entite/CondidatureModel';

@Component({
  selector: 'app-form-add-cand',
  templateUrl: './form-add-cand.component.html',
  styleUrls: ['./form-add-cand.component.css']
})
export class FormAddCandComponent {
  candidatureForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private candidatureService: CandidatureService,
    private router: Router) {
    this.candidatureForm = this.formBuilder.group({
      cin: ['', Validators.required],
      disponibilite: [false, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      image: ['', [Validators.required]],
    
    });
  }
  

  ajouterCandidature() {
    if (this.candidatureForm.valid) {
      const candidatureData: CandidatureModel = this.candidatureForm.value;

      this.candidatureService.addCandidature(candidatureData).subscribe(
        (response) => {
          console.log('Candidature ajoutée avec succès :', response);
          this.router.navigate(['/sucess']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la candidature :', error);
        }
      );
    }
  }
}
