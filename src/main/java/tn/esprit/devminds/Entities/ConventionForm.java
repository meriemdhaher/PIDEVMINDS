package tn.esprit.devminds.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
<<<<<<< HEAD
import jakarta.persistence.*;
=======
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

<<<<<<< HEAD
import java.text.Normalizer;
import java.util.List;
import java.util.Set;

=======
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
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

<<<<<<< HEAD

=======
>>>>>>> 9e30c7eaae08c546e1d35992b01f28ff91c5e3fe
}
