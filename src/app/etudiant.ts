export class Etudiant {
  id: number; // Change 'id' to match the property name used in the server-side Etudiant class
  cin: number;
  nom: string;
  prenom: string;
  numero: number;
  email: string;
  evenement: any[]; // Ensure that this matches the type used in the server-side Etudiant class
  docStage: any; // Ensure that this matches the type used in the server-side Etudiant class
  candidatures: any[]; // Ensure that this matches the type used in the server-side Etudiant class
  messageries: any[]; // Ensure that this matches the type used in the server-side Etudiant class

  constructor(
    id: number = 0,
    cin: number = 0,
    nom: string = '',
    prenom: string = '',
    numero: number = 0,
    email: string = '',
    evenement: any[] = [],
    docStage: any = null,
    candidatures: any[] = [],
    messageries: any[] = []
  ) {
    this.id = id;
    this.cin = cin;
    this.nom = nom;
    this.prenom = prenom;
    this.numero = numero;
    this.email = email;
    this.evenement = evenement;
    this.docStage = docStage;
    this.candidatures = candidatures;
    this.messageries = messageries;
  }
}
