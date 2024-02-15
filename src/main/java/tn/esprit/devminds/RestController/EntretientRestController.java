package tn.esprit.devminds.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Entities.Entretien;
import tn.esprit.devminds.Service.IEntretient;

import java.util.List;

@AllArgsConstructor
@RestController
public class EntretientRestController {
    private IEntretient iEntretient;
    @PostMapping("/addEntre")
    public Entretien addEntretien(@RequestBody Entretien e){
       return iEntretient.addEntretien(e);
    }
    @PutMapping("/updateEntre")
    public Entretien updateEntretien(@RequestBody Entretien e){
        return iEntretient.updateEntretien(e);
    }
    @GetMapping("/getAllEntre")
    public List<Entretien> getAllEntretien(){
        return iEntretient.getAllEntretien();
    }
    @GetMapping("/getEntreById/{idEntretien}")
    public Entretien getEntreById(@PathVariable Long idEntretien){
        return iEntretient.getEntreById(idEntretien);
    }
    @DeleteMapping("/deleteEntre/{idEntretien}")
    public void deleteEntretien(@PathVariable Long idEntretien){
        iEntretient.deleteEntretien(idEntretien);
    }
}
