package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "emails")
public class Email {

    @Id
    private String id;
    private String subject;
    private String body;

}
