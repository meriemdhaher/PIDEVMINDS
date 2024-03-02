import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/etudiant.service';
import { Etudiant } from 'src/app/etudiant';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.css']
})
// ... existing imports ...

export class EtudiantUpdateComponent implements OnInit {
  id: any;
  etudiant: Etudiant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit() {
    this.etudiant = new Etudiant();

    this.id = this.route.snapshot.params['id'];

    this.etudiantService.getEtudiant(this.id).subscribe(
      (data) => {
        this.etudiant = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log('Submit button clicked');
    this.updateEtudiant();
  }
  
  updateEtudiant() {
    console.log('Updating etudiant:', this.etudiant);
    this.etudiantService.updateEtudiant(this.id, this.etudiant).subscribe(
      () => {
        console.log('Etudiant updated successfully');
        this.gotoListEtudiant();
      },
      (error) => {
        console.log('Error updating etudiant:', error);
      }
    );
  }
  
  gotoListEtudiant() {
    console.log('Navigating to etudiant list');
    this.router.navigate(['/etudiant']);
  }
  
}

