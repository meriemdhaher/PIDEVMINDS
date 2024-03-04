
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemandeStageComponent } from '../demande-stage/demande-stage.component';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent {
  
  events = [
    { title: 'Event 1' },
  ];
  demandeStageStepClosed: boolean= false ;
  conventionStepOpened: boolean= false;
  constructor(private dialog: MatDialog) { }
  openDemandeStagePopup() {
    const dialogRef = this.dialog.open(DemandeStageComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // Check if the result is the "cin" value
      if (result && result.cin) {
        // Perform the action to generate the PDF with the "cin"

        // Once the PDF is generated, close the "Demande de Stage" step
        this.closeDemandeStageStep();

      
    }
  });
}
closeDemandeStageStep() {
  this.demandeStageStepClosed = true;
}

}