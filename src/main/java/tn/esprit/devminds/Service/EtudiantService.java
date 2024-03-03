package tn.esprit.devminds.Service;

import tn.esprit.devminds.Entities.Etudiant;

import java.util.List;

public interface EtudiantService {
    // Méthode pour créer un étudiant
    Etudiant createEtudiant(Etudiant etudiant);

    // Méthode pour modifier un étudiant
    Etudiant updateEtudiant(Etudiant etudiant);

    // Méthode pour supprimer un étudiant
    void deleteEtudiant(Long id);

    // Méthode pour obtenir un étudiant par son ID
    Etudiant getEtudiantById(Long id);

    // Méthode pour obtenir tous les étudiants
    List<Etudiant> getAllEtudiants();


    Etudiant getEtudiantByCin(Integer cin);


}
