package tn.esprit.devminds.Controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Entities.Chat;
import tn.esprit.devminds.Services.IChat;

import java.util.List;
@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class ChatController {
    IChat iChat;
    @PostMapping("/addChat")
    public Chat addChat(@RequestBody Chat chat) {
        return iChat.addChat(chat);
    }
@GetMapping("/getallchats")
    public List<Chat> getallchats(){
        return iChat.getallchats();
    };
@GetMapping("/getById/{idc}")
    public  Chat getById(@PathVariable Long idc){
        return iChat.getById(idc);
    }
    @GetMapping("/getChatByFirstUserName/{FirstUserName}")
    public Chat getChatByFirstUserName(@PathVariable String FirstUserName){
        return iChat.getChatByFirstUserName(FirstUserName);
    }
    @GetMapping("/getChatBySecondUserName/{secondUserName}")
    public Chat getChatBySecondUserName(@PathVariable String secondUserName){
        return iChat.getChatBySecondUserName(secondUserName);
    }
  /* @GetMapping("/getChatByFirstUserNameOrSecondUserName/{username}")
    public Chat getChatByFirstUserNameOrSecondUserName(@PathVariable String username){
        return iChat.getChatByFirstUserNameOrSecondUserName(username);
    }*/
    @GetMapping("/getChatByFirstUserNameAndSecondUserName/{firstUserName}/{secondUserName}")
    public Chat getChatByFirstUserNameAndSecondUserName(@PathVariable String firstUserName, @PathVariable String secondUserName){
        return iChat.getChatByFirstUserNameAndSecondUserName(firstUserName ,secondUserName);
    }

}
