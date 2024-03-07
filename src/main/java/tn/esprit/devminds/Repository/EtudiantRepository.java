package tn.esprit.devminds.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devminds.Entities.Etudiant;
@Repository
public interface EtudiantRepository  extends CrudRepository<Etudiant, Long> {
}
