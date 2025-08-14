package com.example.EmployeeSystem.Model;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Document(collection = "employees")
@XmlRootElement(name = "employee")
public class Employee {
    @Id
    private String id;

    private String name;
    private String position;
    private String department;

    @XmlElement
    public String getId() { return id; }

    @XmlElement
    public String getName() { return name; }

    @XmlElement
    public String getPosition() { return position; }

    @XmlElement
    public String getDepartment() { return department; }
}