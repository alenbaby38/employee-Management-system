package com.example.EmployeeSystem.Repository;

import com.example.EmployeeSystem.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);


    void deleteByUsername(String username);

    List<User> findByUsernameStartingWithIgnoreCase(String prefix);
    List<User> findByUsernameContainingIgnoreCase(String substring);
}