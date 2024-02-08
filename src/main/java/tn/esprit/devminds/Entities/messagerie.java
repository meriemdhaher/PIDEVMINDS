package tn.esprit.devminds.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class messagerie {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long idMesg;
    String content;
    Date dateMesg;
    String sender;
    String recipient;
    MessageStatus status;
    MessageType type;
    @ManyToOne
    Entreprise entreprise;
    @ManyToOne
    Etudiant etudiant;

}
