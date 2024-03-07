package tn.esprit.devminds.Repository;

import org.springframework.data.repository.CrudRepository;
import tn.esprit.devminds.Entities.Entretien;
import tn.esprit.devminds.Entities.Offre;

public interface EntretienRepository extends CrudRepository<Entretien,Long> {
}
