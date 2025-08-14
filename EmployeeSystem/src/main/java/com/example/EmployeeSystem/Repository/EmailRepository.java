package com.example.EmployeeSystem.Repository;

import com.example.EmployeeSystem.Model.Email;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmailRepository extends MongoRepository<Email, String> {
}