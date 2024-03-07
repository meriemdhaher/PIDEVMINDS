package tn.esprit.devminds.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Entities.Candidature;
import tn.esprit.devminds.Services.CandidatureService;
import tn.esprit.devminds.Services.ICandidatureService;
import tn.esprit.devminds.Services.IOfferService;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/candidature")
public class CandidatureRestController {
    @Autowired
    ICandidatureService iCandidatureService;

    @GetMapping
    public List<Candidature> getAllCandidatures() {
        return iCandidatureService.getAllCandidatures();
    }

    @GetMapping("/{id}")
    public Candidature getCandidatureById(@PathVariable Long id) {
        return iCandidatureService.getCandidatureById(id);
    }

    @PostMapping
    public Candidature addCandidature(@RequestBody Candidature candidature) {
        return iCandidatureService.addCandidature(candidature);
    }

    @PutMapping("/{id}")
    public Candidature updateCandidature(@PathVariable Long id, @RequestBody Candidature candidature) {
        candidature.setIdCandidature(id);
        return iCandidatureService.updateCandidature(candidature);
    }

    @DeleteMapping("/{id}")
    public void deleteCandidature(@PathVariable Long id) {
        iCandidatureService.deleteCandidature(id);
    }
}
