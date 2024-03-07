package tn.esprit.devminds.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ConventionForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Vous devriez avoir un champ ID pour les entités JPA
    @JsonProperty("nomEntreprise")
    private String nomEntreprise;
    private String periodeStage;
    private String nom;
    private String prenom;
    private Integer cin;

}
