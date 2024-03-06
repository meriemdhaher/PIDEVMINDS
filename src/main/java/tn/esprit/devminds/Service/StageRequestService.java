package tn.esprit.devminds.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.Etudiant;
import tn.esprit.devminds.Entities.PdfGenerator;

@Service
public class StageRequestService {

    @Autowired
    private EtudiantService etudiantService;
    @Autowired
    private PdfStorageService pdfStorageService;
    public Etudiant getEtudiantByCin(Integer cin) {
        return etudiantService.getEtudiantByCin(cin);
    }

    public byte[] generateDemandeDeStagePdf(Etudiant etudiant) {
        if (etudiant == null) {
            throw new IllegalArgumentException("Etudiant not found");
        }

        byte[] pdfContent = PdfGenerator.generateDemandeDeStagePdf(etudiant);

        // Mettez à jour l'étudiant après la génération du PDF
        etudiant.setDemandeImportee(true);
        etudiantService.updateEtudiant(etudiant);

        pdfStorageService.savePdf(etudiant.getId(), pdfContent);
        return pdfContent;
    }
}