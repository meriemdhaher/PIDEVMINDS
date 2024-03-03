package tn.esprit.devminds.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.Etudiant;
import tn.esprit.devminds.Entities.PdfGenerator;

@Service
public class StageRequestService {

    @Autowired
    private EtudiantService etudiantService;

    public Etudiant getEtudiantByCin(Integer cin) {
        return etudiantService.getEtudiantByCin(cin);
    }

    public byte[] generateDemandeDeStagePdf(Etudiant etudiant) {
        if (etudiant == null) {
            throw new IllegalArgumentException("Etudiant not found");
        }

        return PdfGenerator.generateDemandeDeStagePdf(etudiant);
    }
}