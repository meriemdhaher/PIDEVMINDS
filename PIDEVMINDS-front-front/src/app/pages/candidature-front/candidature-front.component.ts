import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatModel } from 'src/app/entite/candidatModel';
import { CandidatService } from 'src/app/services/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-front',
  templateUrl: './candidature-front.component.html',
  styleUrls: ['./candidature-front.component.css']
})
export class CandidatureFrontComponent implements OnInit {
  candidatureForm: FormGroup = new FormGroup({});
  currentStep: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private candidatService: CandidatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.candidatureForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', Validators.required],
      address: ['', Validators.required],
      numTel: ['', [Validators.required, Validators.pattern('[0-9]{3}[0-9]{3}[0-9]{3}')]],
      titre: ['', Validators.required],
      societe: ['', Validators.required],
      experienceDescription: ['', Validators.required],
      experienceDu: ['', Validators.required],
      experienceAu: ['', Validators.required],
      etablissement: ['', Validators.required],
      specialisation: ['', Validators.required],
      niveauEtude: ['', Validators.required],
      competence: ['', Validators.required],
      formationDu: ['', Validators.required],
      formationAu: ['', Validators.required],
    
    });
  }

  submitForm() {
   
    if (this.candidatureForm.valid) {
      const candidatureData: CandidatModel = { ...this.candidatureForm.value };

      this.candidatService.addCandidat(candidatureData).subscribe(
        (response) => {
          console.log('Candidature ajoutée avec succès :', response);
          this.router.navigate(['/success']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la candidature :', error);
        }
      );
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.candidatureForm.get(fieldName);
    return control?.invalid ?? false;
  }

  
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  postulerAvecLinkedIn() {
    console.log('Postuler avec LinkedIn');
  }
}
