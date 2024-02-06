package tn.esprit.devminds.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Candidature implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long idCandidature;
    int cin;
    String nom;
    String  penom;
    boolean disponibilite;
    String email;
    @ManyToOne
    Etudiant etudiant;
    @ManyToMany(mappedBy = "candidatures",cascade = CascadeType.ALL)
    Set<Entreprise> entreprises;
}
