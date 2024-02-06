package tn.esprit.devminds.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Offre implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long idOffre;
    String description;
    String title;
    Date periode;
    @ManyToOne
    Entreprise entreprise;

}
