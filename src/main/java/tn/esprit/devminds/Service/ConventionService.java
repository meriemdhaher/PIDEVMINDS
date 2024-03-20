package tn.esprit.devminds.Service;

import jakarta.persistence.EntityNotFoundException;
<<<<<<< HEAD
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.devminds.Entities.ConventionForm;
import tn.esprit.devminds.Entities.Etudiant;
import tn.esprit.devminds.Repository.ConventionFormRepository;


@Service
@Slf4j
=======
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.ConventionForm;
import tn.esprit.devminds.Entities.Etudiant;
import tn.esprit.devminds.Repository.ConventionFormRepository;
import tn.esprit.devminds.Repository.EtudiantRepository;

@Service
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
public class ConventionService {

    @Autowired
    private ConventionFormRepository conventionFormRepository;

    @Autowired
<<<<<<< HEAD
    private EtudiantService etudiantService;

=======
    private EtudiantService etudiantService; // Supposons que vous avez un service pour gérer les étudiants

    @Transactional
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
    public ConventionForm generateConventionFormByCin(Integer cin) {
        Etudiant etudiant = etudiantService.getEtudiantByCin(cin);
        if (etudiant == null) {
            throw new EntityNotFoundException("Étudiant non trouvé avec le CIN : " + cin);
        }

        ConventionForm conventionForm = new ConventionForm();
        conventionForm.setNomEntreprise(""); // Initialisez comme nécessaire
        conventionForm.setPeriodeStage(""); // Initialisez comme nécessaire
        conventionForm.setNom(etudiant.getNom()); // Utilisez le nom de l'étudiant
        conventionForm.setPrenom(etudiant.getPrenom()); // Utilisez le prénom de l'étudiant
        // Ajoutez d'autres champs si nécessaire

        return conventionForm;
    }

<<<<<<< HEAD
=======
    @Transactional
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
    public void processConventionForm(ConventionForm conventionForm) {
        // Récupérer l'étudiant par CIN
        Etudiant etudiant = etudiantService.getEtudiantByCin(conventionForm.getCin());

        // Vérifier si l'étudiant existe
        if (etudiant == null) {
            throw new EntityNotFoundException("Aucun étudiant trouvé avec le CIN : " + conventionForm.getCin());
        }

<<<<<<< HEAD
        // Mettre à jour les champs dans l'entité Etudiant
        etudiant.setNomEntreprise(conventionForm.getNomEntreprise());
        etudiant.setPeriodeStage(conventionForm.getPeriodeStage());
=======

        // Log the values to see what's happening
        System.out.println("Nom Entreprise: " + conventionForm.getNomEntreprise());
        System.out.println("Periode Stage: " + conventionForm.getPeriodeStage());

        // Autres champs du formulaire

        // Exemple de validation des champs obligatoires
        if (conventionForm.getNomEntreprise() == null || conventionForm.getNomEntreprise().trim().isEmpty()) {
            System.out.println("Validation failed: Le champ Nom Entreprise est obligatoire.");
            throw new IllegalArgumentException("Le champ Nom Entreprise est obligatoire.");
        }

        if (conventionForm.getPeriodeStage() == null || conventionForm.getPeriodeStage().isEmpty()) {
            System.out.println("Validation failed: Le champ Période de Stage est obligatoire.");
            throw new IllegalArgumentException("Le champ Période de Stage est obligatoire.");
        }
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe

        // Logique de sauvegarde dans la base de données
        try {
            conventionFormRepository.save(conventionForm);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de l'enregistrement du formulaire de convention dans la base de données.", e);
        }
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
