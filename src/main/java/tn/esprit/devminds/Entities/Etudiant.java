package tn.esprit.devminds.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "etudiant")
public class Etudiant implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @JsonIgnore
    Long idEtudiant;
    int cin;
    @Column(name = "nom")
    String nom;
    String prenom;
    int numero;
    String email;

    @ManyToMany
    Set<Evenement> evenement;
    @OneToOne(mappedBy = "etudiant")
    DocStage docStage;
    @OneToMany(mappedBy = "etudiant",cascade = CascadeType.ALL)
    Set<Candidature> candidatures;
    @OneToMany (mappedBy = "etudiant",cascade = CascadeType.ALL)
    Set<messagerie> messageries;


    public Long getId() {
        return idEtudiant;
    }

    public void setId(Long id) {
        this.idEtudiant = id;
    }


    public void setDemandeImportee(boolean b) {
    }
}
