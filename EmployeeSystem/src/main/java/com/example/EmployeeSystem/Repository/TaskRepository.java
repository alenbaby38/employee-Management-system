package com.example.EmployeeSystem.Repository;
import com.example.EmployeeSystem.Model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;


public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByAssignedTo(String username);
    List<Task> findByProjectId(String projectId);

}