// timeline-component.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemandeStageComponent } from '../demande-stage/demande-stage.component';
import { ConventionComponent } from '../convention/convention.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent {
  events = [
    { title: 'Demande de Stage', closed: false },
    { title: 'Convention', closed: false },
  ];

  constructor(private dialog: MatDialog) {}

  openPopup(event: any) {
    if (event.title === 'Demande de Stage') {
      this.openDemandeStagePopup();
    } else if (event.title === 'Convention') {
      this.openConventionPopup();
    }
  }

  openDemandeStagePopup() {
    const dialogRef = this.dialog.open(DemandeStageComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Demande de Stage fermée');
      this.closeEvent('Demande de Stage');
    });
  }

  openConventionPopup() {
    const dialogRef = this.dialog.open(ConventionComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Convention fermée');
      this.closeEvent('Convention');
    });
  }

  closeEvent(title: string) {
    const event = this.events.find(e => e.title === title);
    if (event) {
      event.closed = true;
    }
  }

  isClosed(event: any): boolean {
    return event.closed;
  }
}
