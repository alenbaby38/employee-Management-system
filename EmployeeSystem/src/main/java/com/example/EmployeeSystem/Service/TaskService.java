package com.example.EmployeeSystem.Service;


import com.example.EmployeeSystem.Model.Task;
import com.example.EmployeeSystem.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> findByAssignedTo(String username) {
        return taskRepository.findByAssignedTo(username);
    }

    public List<Task> findByProjectId(String projectId) {
        return taskRepository.findByProjectId(projectId);
    }

    public List<Task> findAll() {
        return taskRepository.findAll();
    }


}
