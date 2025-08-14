package com.example.EmployeeSystem.Repository;

import com.example.EmployeeSystem.Model.DSR;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DSRRepository extends MongoRepository<DSR, String> {
        List<DSR> findByUserId(String userId);
    }