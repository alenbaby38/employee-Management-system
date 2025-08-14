package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "employees")
public class Excel {
    @Id
    private String id;

    private String name;
    private String email;
    private String department;


}