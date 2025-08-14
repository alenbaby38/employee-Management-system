package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.Task;
import com.example.EmployeeSystem.Model.User;
import com.example.EmployeeSystem.Repository.TaskRepository;
import com.example.EmployeeSystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TaskRepository taskRepository;
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User existingUser) throws IOException {
        return (User) userRepository.save(existingUser);
    }

    public Long getCompletedTaskCount() {
        List<Task> allTasks = taskRepository.findAll();
        int completedCount = 0;
        for (Task task : allTasks) {
            if (task.getStatus() != null && task.getStatus().equalsIgnoreCase("completed")) {
                completedCount++;
            }
        }
        return (long) completedCount;
    }

    public Long getInCompletedTaskCount() {
        List<Task> allTasks = taskRepository.findAll();
        int incompletedCount = 0;
        for (Task task : allTasks) {
            if (task.getStatus() != null) {
                String status = task.getStatus().toLowerCase();
                if (status.equals("incompleted") || status.equals("in progress") || status.equals("pending")) {
                    incompletedCount++;
                }
            }
        }
        return (long) incompletedCount;
    }

    public void deleteByUsername(String username) {
        userRepository.deleteByUsername(username);
    }

    public List<User> searchUsersByPrefix(String query) {
        return userRepository.findByUsernameStartingWithIgnoreCase(query);
    }

    public List<User> searchUsersByCase(String query) {
        return userRepository.findByUsernameContainingIgnoreCase(query);
    }
}