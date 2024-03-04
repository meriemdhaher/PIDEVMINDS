package tn.esprit.devminds.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.PdfEntity;
import tn.esprit.devminds.Repository.PdfRepository;

@Service
public class PdfStorageService {
    @Autowired
    private PdfRepository pdfRepository; // Vous devrez créer un repository pour manipuler les PDF dans la base de données.

    public void savePdf(Long etudiantId, byte[] pdfContent) {
        PdfEntity pdfEntity = new PdfEntity();
        pdfEntity.setEtudiantId(etudiantId);
        pdfEntity.setContent(pdfContent);
        pdfRepository.save(pdfEntity);
    }
}
