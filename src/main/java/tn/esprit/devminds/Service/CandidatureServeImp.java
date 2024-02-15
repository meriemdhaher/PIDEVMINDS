package tn.esprit.devminds.Service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.Candidature;
import tn.esprit.devminds.Repository.ICandidatureRepo;

import java.util.List;

@AllArgsConstructor
@Service
public class CandidatureServeImp implements ICandidature{
    private ICandidatureRepo iCandidatureRepo;

    @Override
    public Candidature addCandidature(Candidature c) {

        return iCandidatureRepo.save(c);
    }

    @Override
    public Candidature updateCandidature(Candidature c) {
        return iCandidatureRepo.save(c);
    }

    @Override
    public List<Candidature> getAllCandidature() {
        return iCandidatureRepo.findAll();
    }

    @Override
    public Candidature getCandidatureById(Long idCandidature) {
        return iCandidatureRepo.findById(idCandidature).orElse(null);
    }

    @Override
    public void deleteCandidture(long idCandidature) {
     iCandidatureRepo.deleteById(idCandidature);
    }
}
