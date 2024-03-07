package tn.esprit.devminds.Services;

import tn.esprit.devminds.Entities.User;

import java.util.List;

public interface IUser {
      public List<User> getallUsers();
    public User addUser(User user) ;
    public User getUserByUserName(String username);


}
