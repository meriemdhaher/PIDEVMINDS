import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DemandeStageComponent } from '../demande-stage/demande-stage.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent implements OnInit { 
  events = [
    { title: 'Event 1', date: '2024' },
  ];

  constructor(private modalService: NgbModal, private httpClient: HttpClient) { }

  ngOnInit(): void {}

  openDemandeStagePopup(event: any) {
    // Implémentez la logique pour ouvrir la demande de stage ici
    console.log('Opening demande de stage popup...');

    // Make the HTTP request to generate the PDF
    const studentId = 3; // Replace with the actual student ID
    this.httpClient.get(`http://localhost:8089/demande-stage/pdf/${studentId}`)
      .subscribe(response => {
        // Handle the response
        console.log(response);
      }, error => {
        // Handle errors
        console.error(error);
      });

    // Ouvrir la fenêtre modale avec le contenu requis
    const modalRef = this.modalService.open(DemandeStageComponent, { ariaLabelledBy: 'modal-basic-title' });

    // Passer les données nécessaires à la fenêtre modale (par exemple, event)
    modalRef.componentInstance.event = event;
  }
}
