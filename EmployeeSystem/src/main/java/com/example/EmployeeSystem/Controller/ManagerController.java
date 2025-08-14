package com.example.EmployeeSystem.Controller;

import com.example.EmployeeSystem.Exceptions.EmailException;
import com.example.EmployeeSystem.Model.*;
import com.example.EmployeeSystem.Service.*;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@Slf4j
@RestController
@RequestMapping("/manager")
public class ManagerController {
    @Autowired
    ExcelService excelService;
    @Autowired
    private ProjectService projectService;
    @Autowired
    private DSRService dsrService;
 @Autowired
 private UserService userService;
 @Autowired
 private TaskService taskService;
 @Autowired
 private EmailSenderService emailSenderService;
    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) {

        return projectService.createProject(project);
    }
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/projects")
    public List<Project> getProject() {

        return projectService.findAll();
    }
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/tasks")
    public List<Task> getTask() {

        return taskService.findAll();
    }
//    @PreAuthorize("hasRole('MANAGER')")
//    @GetMapping("/tasks")
//    public List<Task> getTaskByUsername() {
//
//        return taskService.getTaskByUsername();
//    }
//

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/employees")
    public List<User> getAllEmployees() {
        return userService.findAll();
    }
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/topemployees")
    public List<Map<String, Object>> getTopEmployees() {
        return dsrService.getTop5UsersByDSRTime();
    }
    @PreAuthorize("hasRole('MANAGER')")
    @PutMapping("/projects/{projectName}")
    public ResponseEntity<?> updateProject(@PathVariable String projectName,
                                           @RequestBody Project payload) {
        Project updated = projectService.updateProjectByName(projectName, payload);
        return updated == null ? ResponseEntity.status(HttpStatus.NOT_FOUND).body("Project not found")
                : ResponseEntity.ok(updated);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @DeleteMapping("/projects/{projectName}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectName) {
        return projectService.deleteProjectByName(projectName)
                ? ResponseEntity.ok("Project deleted successfully")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Project not found");
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/dsr/{username}")
    public ResponseEntity<List<DSR>> getUserDSR(@PathVariable String username) {
        List<DSR> dsrs = dsrService.findByUserId(username);
        log.info("dsr of {} is fetched",username);
        return dsrs.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(dsrs);
    }
    @GetMapping("/getUser/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        Optional<User> user = Optional.ofNullable(userService.getUserByUsername(username));
        log.info("trying to fetch the user details of {}",username);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PreAuthorize("hasRole('MANAGER')")
    @PutMapping("/editUser/{username}")
    public ResponseEntity<?> editUserByUsername(
            @PathVariable String username,
            @RequestBody User updatedUser) throws IOException {
        User existingUser = userService.getUserByUsername(username);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setRole(updatedUser.getRole());
        userService.save(existingUser);
        existingUser.setPassword(null);
        return ResponseEntity.ok(existingUser);
    }
    @DeleteMapping("/deleteUser/{username}")
    public ResponseEntity<Void> deleteEmployeeByUsername(@PathVariable String username) {
        Optional<User> userOptional = Optional.ofNullable(userService.getUserByUsername(username));
        if (userOptional.isPresent()) {
            userService.deleteByUsername(username);
            return ResponseEntity.noContent().build(); // HTTP 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // HTTP 404 Not Found
        }
    }
    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/projects/{projectName}/assign")
    public ResponseEntity<?> assignProject(@PathVariable String projectName,
                                           @RequestBody List<String> usernames) {
        Optional<Project> opt = projectService.findByName(projectName);
        if (opt.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Project not found");
        Project p = opt.get();
        p.setAssignedTo(usernames);
        projectService.save(p);
        return ResponseEntity.ok("Assigned successfully");
    }
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/projects/{projectName}/users")
    public ResponseEntity<?> getUsersForProject(@PathVariable String projectName) {
        Optional<Project> opt = projectService.findByName(projectName);
        if (opt.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Project not found");
        List<User> users = opt.get().getAssignedTo().stream()
                .map(userService::getUserByUsername)
                .filter(u -> u != null).toList();
        users.forEach(u -> u.setPassword(null));
        return ResponseEntity.ok(users);
    }
    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/sendemail")
    public ResponseEntity<?> sendCustomEmail(@RequestBody EmailRequest emailRequest){
        try{
            emailSenderService.sendCustomMail(
                    emailRequest.getTo(),
                    emailRequest.getSubject(),
                    emailRequest.getBody()
            );
            return ResponseEntity.ok("Email sent to " + emailRequest.getTo());
        } catch (EmailException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to send email: " + e.getMessage());
        }
        }


    @Autowired
    private EmployeeService employeeService;
    @PreAuthorize(" hasRole('MANAGER')")
    @PostMapping("/api/xml/import")
    public ResponseEntity<String> importXml(@RequestParam("file") MultipartFile file) {
        String response = employeeService.importEmployeesFromXml(file);
        return ResponseEntity.ok(response);
    }
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/api/xml/employees")
    public ResponseEntity<List<Employee>> GetEmployee() {
        List<Employee> response = employeeService.GetEmployee();
        return ResponseEntity.ok(response);
    }
//    @PreAuthorize(" hasRole('MANAGER')")
//    @GetMapping("/api/xml/count")
//    public ResponseEntity<Object> GetCount() {
//        Object response = employeeService.getCount();
//        return ResponseEntity.ok(response);
//    }
    @PreAuthorize(" hasRole('MANAGER')")
    @GetMapping("/Employees/taskcompletedcount")
    public ResponseEntity<?> getCompletedTaskCount() {
        Object response = userService.getCompletedTaskCount();
        return ResponseEntity.ok(response);
    }
    @PreAuthorize(" hasRole('MANAGER')")
    @GetMapping("/Employees/taskincompletedcount")
    public ResponseEntity<?> getInCompletedTaskCount() {
        Object response = userService.getInCompletedTaskCount();
        return ResponseEntity.ok(response);
    }
    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String query) {
        return userService.searchUsersByPrefix(query);
    }
    @GetMapping("/searching")
    public List<User> searchUsersCase(@RequestParam String query) {
        return userService.searchUsersByCase(query);
    }
}