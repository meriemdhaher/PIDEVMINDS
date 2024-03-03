
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
    // ... autres événements
  ];
  constructor(private dialog: MatDialog) { }
  openDemandeStagePopup() {
    const dialogRef = this.dialog.open(DemandeStageComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
