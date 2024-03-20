import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemandeStageComponent } from '../demande-stage/demande-stage.component';
import { ConventionComponent } from '../convention/convention.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent {
  demandeStageCompleted: boolean = true;
  conventionCompleted: boolean = false;

  constructor(private dialog: MatDialog) {
    // Initialiser les étapes à la demande de stage
    this.openDemandeStagePopup();
  }

  openDemandeStagePopup() {
    const dialogRef = this.dialog.open(DemandeStageComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Demande de Stage fermée');
      // Mettre à jour l'état de la demande de stage une fois fermée
      this.demandeStageCompleted = true;
    });
  }

  openConventionPopup() {
    const dialogRef = this.dialog.open(ConventionComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Convention fermée');
      // Mettre à jour l'état de la convention une fois fermée
      this.conventionCompleted = true;
    });
  }

  onStepSelectionChange(event: StepperSelectionEvent) {
    const selectedIndex = event.selectedIndex;

    if (selectedIndex === 0) {
      if (!this.demandeStageCompleted) {
        this.openDemandeStagePopup();
      }
    } else if (selectedIndex === 1) {
      if (!this.conventionCompleted) {
        this.openConventionPopup();
      }
    }
  }

  isStageDemandeCompleted(): boolean {
    return this.demandeStageCompleted;
  }

  isConventionCompleted(): boolean {
    return this.conventionCompleted;
  }
}
