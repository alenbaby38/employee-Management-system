package com.example.EmployeeSystem.Repository;

import com.example.EmployeeSystem.Model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
}

