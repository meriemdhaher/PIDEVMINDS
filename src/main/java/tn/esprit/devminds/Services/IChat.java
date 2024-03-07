package tn.esprit.devminds.Services;

import tn.esprit.devminds.Entities.Chat;

import java.util.List;

public interface IChat {
    public  Chat addChat(Chat chat) ;
    public List<Chat> getallchats();

    public  Chat getById(Long idc);
    public Chat getChatByFirstUserName(String FirstUserName);
    public Chat getChatBySecondUserName(String secondUserName);
   /* public Chat getChatByFirstUserNameOrSecondUserName(String username);*/
   public Chat getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName);


}
