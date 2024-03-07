package tn.esprit.devminds.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

public class message implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long idMesg;
    String content;
    @Temporal(TemporalType.DATE)
    Date dateMesg;
    @Enumerated(EnumType.STRING)
    MessageStatus status;
    @Enumerated(EnumType.STRING)
    MessageType type;
     String replymessage;
     String senderEmail;

}
