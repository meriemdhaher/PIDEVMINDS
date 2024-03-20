package tn.esprit.devminds.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.Normalizer;
import java.util.List;
import java.util.Set;

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
