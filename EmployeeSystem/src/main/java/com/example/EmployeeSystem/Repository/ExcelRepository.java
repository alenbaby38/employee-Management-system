package com.example.EmployeeSystem.Repository;

import com.example.EmployeeSystem.Model.Excel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExcelRepository extends MongoRepository<Excel, String> {
}
