package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document("task")
public class Task {
    @Id
    private String id;
    private String projectId;
    private String title;

    private String assignedTo;
    private String status;

}
