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
public class Entreprise implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    long reference;
    String label;
    String email;
    String nom;
    String adresse;
    @OneToMany(mappedBy = "entreprise")
    Set<DocStage> docStages;
    @ManyToMany
    Set<Candidature> candidatures;
    @OneToMany(mappedBy = "entreprise")
    Set<Entretien> entretiens;
    @OneToMany(mappedBy = "entreprise")
    Set<Offre> offres;
    @OneToMany (mappedBy = "entreprise")
    Set<messagerie> messageries;

}