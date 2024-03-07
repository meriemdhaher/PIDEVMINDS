package tn.esprit.devminds.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devminds.Entities.User;
import tn.esprit.devminds.Repositories.UserRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class UserServiceImp implements IUser{
private UserRepository userRepository;

    @Override
    public List<User> getallUsers() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByUserName(String username) {
        return userRepository.getUserByUserName(username);
    }
}
