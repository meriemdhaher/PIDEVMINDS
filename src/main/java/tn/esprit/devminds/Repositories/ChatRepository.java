package tn.esprit.devminds.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devminds.Entities.Chat;



public interface ChatRepository extends JpaRepository<Chat,Long>
{
    public Chat getChatByFirstUserName(String FirstUserName);

    public Chat getChatBySecondUserName(String secondUserName);

   public Chat getChatByFirstUserNameOrSecondUserName(String firstUserName, String secondUserName);

    public Chat getChatBySecondUserNameAndFirstUserName(String firstUserName, String secondUserName);
}

