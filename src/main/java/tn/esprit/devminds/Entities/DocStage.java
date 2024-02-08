package tn.esprit.devminds.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class DocStage implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long idDoc;
    String titre;
    @Enumerated(EnumType.STRING)
    TypeDoc doc;
    boolean validation;
    Date periode;
    float note;
    String remarque;
    @ManyToOne
    Entreprise entreprise;
    @OneToOne
    Etudiant etudiant;




}
