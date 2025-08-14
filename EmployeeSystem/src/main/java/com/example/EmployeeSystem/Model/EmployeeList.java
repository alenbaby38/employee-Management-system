package com.example.EmployeeSystem.Model;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.Setter;

import java.util.List;

@Setter
@XmlRootElement(name = "employees")
public class EmployeeList {

    private List<Employee> employees;

    @XmlElement(name = "employee")
    public List<Employee> getEmployees() {
        return employees;
    }

}
