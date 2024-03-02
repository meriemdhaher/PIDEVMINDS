import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent implements OnInit{ 
  events = [
    { title: 'Event 1', date: '2024-03-01' },
    { title: 'Event 2', date: '2024-03-05' },
  ];
  constructor() { }
  ngOnInit(): void {
    
  }

}
