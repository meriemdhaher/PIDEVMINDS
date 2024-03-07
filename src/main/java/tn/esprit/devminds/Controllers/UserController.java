package tn.esprit.devminds.Controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Services.IUser;
import tn.esprit.devminds.Entities.User;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class UserController {
 IUser iUser;
 @GetMapping("/getallUsers")
 public List<User> getallUsers(){
  return iUser.getallUsers();
 }
 @PostMapping("/addUser")
 public User addUser(@RequestBody User user) {
 return iUser.addUser(user);
 }
 @GetMapping("/getUserByUserName/{username}")
 public User getUserByUserName(@PathVariable String username){
   return iUser.getUserByUserName(username);
 }


}
