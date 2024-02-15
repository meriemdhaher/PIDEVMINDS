package tn.esprit.devminds.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Entities.Candidature;
import tn.esprit.devminds.Service.ICandidature;

import java.util.List;

@AllArgsConstructor
@RestController
public class CandidatureRestController {
    private ICandidature iCandidature;
    @PostMapping("/addCand")
    public Candidature addCandidature(@RequestBody Candidature c){
        return iCandidature.addCandidature(c);
    }
    @PutMapping("/updateCand")
    public Candidature updateCandidature(@RequestBody Candidature c){
        return iCandidature.updateCandidature(c);
    }
    @GetMapping("/getAllCand")
    public List<Candidature> getAllCandidature(){
        return iCandidature.getAllCandidature();
    }
    @GetMapping("/getCandById/{idCandidature}")
    public Candidature getCandidatureById(@PathVariable Long idCandidature){
        return iCandidature.getCandidatureById(idCandidature);
    }
    @DeleteMapping("/deleteCand/{idCandidature}")
    public void deleteCandidture(@PathVariable long idCandidature){
        iCandidature.deleteCandidture(idCandidature);
    }
}
