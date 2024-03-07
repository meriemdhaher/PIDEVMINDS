export class CandidatModel {
    
        "idCandidat": number;
        "prenom": string;
        "nom": string;
        "email": string;
        "confirmEmail":string;
        "address": string;
        "numTel": string;
        "titre": string;
        "societe":string;
        "experienceDescription": string;
        "experienceDu": Date;
        "experienceAu": Date;
        "etablissement": string;
        "specialisation": string;
        "niveauEtude": string;
        "competence": string;
        "formationDu": Date;
        "formationAu":Date;
        
    
    [key: string]: number | string | Date; 

  }
  