package tn.esprit.devminds.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devminds.Entities.Candidature;

public interface ICandidatureRepo extends JpaRepository<Candidature,Long> {
}
