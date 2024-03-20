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
<<<<<<< HEAD
    boolean demandeStageEffectuee;
    @Column(name = "nom_entreprise")
    private String nomEntreprise;

    @Column(name = "periode_stage")
    private String periodeStage;

=======
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe

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

    public void setDemandeStageEffectuee(boolean demandeStageEffectuee) {
        this.demandeStageEffectuee = demandeStageEffectuee;
    }

    public boolean isDemandeStageEffectuee() {
        return demandeStageEffectuee;
    }
    public String getNomEntreprise() {
        return nomEntreprise;
    }

    public void setNomEntreprise(String nomEntreprise) {
        this.nomEntreprise = nomEntreprise;
    }

    public String getPeriodeStage() {
        return periodeStage;
    }

    public void setPeriodeStage(String periodeStage) {
        this.periodeStage = periodeStage;
    }
}
