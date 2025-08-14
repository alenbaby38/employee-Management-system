package com.example.EmployeeSystem.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Setter
@Getter
@Document
public class DSR {
    private String userId;
    private LocalDate date;

    private List<DSRTaskEntry> entries;

}
