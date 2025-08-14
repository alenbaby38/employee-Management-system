package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.Project;
import com.example.EmployeeSystem.Model.Task;
import com.example.EmployeeSystem.Repository.ProjectRepository;
import com.example.EmployeeSystem.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;
@Autowired
private TaskRepository taskRepository;
    public Project createProject(Project project) {
        List<Task> tasks = project.getTasks();

        // Temporarily remove tasks to save project without tasks
        project.setTasks(null);
        Project savedProject = projectRepository.save(project);

        // Set projectId in tasks and save tasks
        if (tasks != null && !tasks.isEmpty()) {
            for (Task task : tasks) {
                task.setProjectId(savedProject.getId());
            }
            taskRepository.saveAll(tasks);

            // Set tasks back to project and save project again
            savedProject.setTasks(tasks);
            savedProject = projectRepository.save(savedProject);
        }

        return savedProject;
    }


    public boolean deleteProjectByName(String projectName) {
        Optional<Project> projectOpt = projectRepository.findByName(projectName);
        if (projectOpt.isPresent()) {
            projectRepository.delete(projectOpt.get());
            return true;
        }
        return false;
    }

    public Project updateProjectByName(String projectName, Project incoming) {
        return projectRepository.findByName(projectName)
                .map(p -> {
                    p.setDescription(incoming.getDescription());
                    if (incoming.getAssignedTo() != null) p.setAssignedTo(incoming.getAssignedTo());
                    return projectRepository.save(p);
                })
                .orElse(null);
    }


    public Optional<Project> findByName(String projectName) {
        return projectRepository.findByName(projectName);
    }

    public List<Project> findByAssignedToContains(String username) {
        return projectRepository.findByAssignedToContains(username);
    }

    public void save(Project project) {
        projectRepository.save(project);
    }

    public List<Project> findAll() {
        return projectRepository.findAll();
    }
}
