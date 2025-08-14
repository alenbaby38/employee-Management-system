package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.Employee;
import com.example.EmployeeSystem.Model.EmployeeList;
import com.example.EmployeeSystem.Model.Task;
import com.example.EmployeeSystem.Repository.EmployeeRepository;
import com.example.EmployeeSystem.Repository.TaskRepository;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
@Autowired
private TaskRepository taskRepository;
    public String importEmployeesFromXml(MultipartFile file) {
        try {
            InputStream inputStream = file.getInputStream();
            JAXBContext jaxbContext = JAXBContext.newInstance(EmployeeList.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            EmployeeList employeeList = (EmployeeList) unmarshaller.unmarshal(inputStream);

            List<Employee> employees = employeeList.getEmployees();
            employeeRepository.saveAll(employees);
            return "Successfully imported " + employees.size() + " employees.";

        } catch (JAXBException e) {
            return "Invalid XML structure: " + e.getMessage();
        } catch (Exception e) {
            return "Failed to import XML: " + e.getMessage();
        }
    }

    public List<Employee> GetEmployee() {
        return employeeRepository.findAll();
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public Object getCount() {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.group().count().as("totalEmployees"),
                Aggregation.project("totalEmployees")
        );

        AggregationResults<Document> results = mongoTemplate.aggregate(
                aggregation,
                "employees", // collection name, all lowercase
                Document.class
        );

        return results.getUniqueMappedResult();
    }


}

