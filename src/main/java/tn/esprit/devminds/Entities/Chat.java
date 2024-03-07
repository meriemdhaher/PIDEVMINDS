package tn.esprit.devminds.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Chat implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

     Long chatId;
     String firstUserName;
     String secondUserName;
    @OneToMany(cascade = CascadeType.ALL)
    private Set<message> messages;

}
