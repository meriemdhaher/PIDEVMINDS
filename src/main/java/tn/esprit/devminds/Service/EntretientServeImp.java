package tn.esprit.devminds.Service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.Entretien;
import tn.esprit.devminds.Repository.IEntretientRepo;

import java.util.List;

@AllArgsConstructor
@Service
public class EntretientServeImp implements IEntretient{
    private IEntretientRepo iEntretientRepo;

    @Override
    public Entretien addEntretien(Entretien e) {
        return iEntretientRepo.save(e);
    }

    @Override
    public Entretien updateEntretien(Entretien e) {
        return iEntretientRepo.save(e);
    }

    @Override
    public List<Entretien> getAllEntretien() {
        return iEntretientRepo.findAll();
    }

    @Override
    public Entretien getEntreById(Long idEntretien) {
        return iEntretientRepo.findById(idEntretien).orElse(null);
    }

    @Override
    public void deleteEntretien(Long idEntretien) {
    iEntretientRepo.deleteById(idEntretien);
    }
}
