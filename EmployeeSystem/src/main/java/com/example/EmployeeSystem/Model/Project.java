package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document
public class Project {
    @Id
    private String id;
    private String name;
    private String description;
    private List<String> assignedTo;
    private List<Task> tasks;// usernames of assigned employees
}