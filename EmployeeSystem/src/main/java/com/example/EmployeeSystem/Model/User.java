package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private Role role;
    private String email;

}
