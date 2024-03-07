import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  offres = [
    {
      logo: '../../assets/image/actia.jpg',
      date: '01/03/2024',
      titre: 'Stage en Développement Web',
      adresse: 'ACTIA Engineering Services',
    },
    {
      logo: '../../assets/image/Vermeg.jpg',
      date: '02/05/2024',
      titre: "Stage d'été: développement informatique",
      adresse: 'VERMEG Tunis, R6JM+G4C, Rue du Lac Biwa, Tunis 1053',
    },
    {
      logo: '../../assets/image/focus-corporation.png',
      date: '02/05/2026',
      titre: "Stage d'été: Génie Logiciel",
      adresse: 'Focus, Focus Building, Z.I Chotrana II, Ariana 2036',
    },
    {
      logo: '../../assets/image/weData.png',
      date: '02/05/2027',
      titre: "Stage d'été: Génie Logiciel",
      adresse: 'Wedata Consult, Rue Mohamed Attia, Sousse 4051',
    },
  ];
  onPostulerMaintenantClick(): void {
    this.router.navigate(['/candidatureFront']);
  }
}

