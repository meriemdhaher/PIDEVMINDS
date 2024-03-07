package tn.esprit.devminds.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devminds.Entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
    public User getUserByUserName(String username);

}
