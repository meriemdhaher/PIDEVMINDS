package tn.esprit.devminds.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.Chat;
import tn.esprit.devminds.Repositories.ChatRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ChatServiceImp implements IChat{
    private ChatRepository chatRepository;
    @Override
    public Chat addChat(Chat chat) {
        return chatRepository.save(chat);
    }

    @Override
    public List<Chat> getallchats() {
        return chatRepository.findAll();
    }

    @Override
    public Chat getById(Long idc) {
        return chatRepository.findById(idc).orElse(null);
    }

    @Override
    public Chat getChatByFirstUserName(String FirstUserName) {
        return chatRepository.getChatByFirstUserName(FirstUserName);
    }

    @Override
    public Chat getChatBySecondUserName(String secondUserName) {
        return chatRepository.getChatBySecondUserName(secondUserName);
    }



   /* @Override
    public Chat getChatByFirstUserNameOrSecondUserName(String username) {
        return chatRepository.getChatByFirstUserNameOrSecondUserName(username);
    }*/

    @Override
    public Chat getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName) {
        return chatRepository.getChatBySecondUserNameAndFirstUserName(firstUserName ,secondUserName);
    }
}
