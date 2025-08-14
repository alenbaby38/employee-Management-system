package com.example.EmployeeSystem.Controller;

import com.example.EmployeeSystem.Model.*;
import com.example.EmployeeSystem.Service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.Principal;
import java.time.LocalDate;
import java.util.List;
@Slf4j
@RestController
@RequestMapping("/employee")
public class EmployeeController {
@Autowired
private ExcelService excelService;
    @Autowired
    private DSRService dsrService;
    @Autowired
    private ProjectService projectService;
    @Autowired
    private TaskService taskService;
@Autowired
private UserService userService;
    @PreAuthorize("hasRole('EMPLOYEE')")
    @PostMapping("/dsr")
    public DSR submitDSR(@RequestBody DSR dsr, Principal principal) {
        dsr.setUserId(principal.getName());
        dsr.setDate(LocalDate.now());
        log.info("fetching all dsr");
        return dsrService.submitDSR(dsr);
   }
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('MANAGER')")
    @GetMapping("/profile")
    public ResponseEntity<?> viewProfile(Principal principal) {
        User user = userService.getUserByUsername(principal.getName());
        if (user == null) return ResponseEntity.notFound().build();
        user.setPassword(null);
        log.info("user profile end point is hit");
        return ResponseEntity.ok(user);
    }
    @PreAuthorize("hasRole('EMPLOYEE')")
    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(Principal principal, @RequestBody User payload) throws IOException {
        User existing = userService.getUserByUsername(principal.getName());
        if (existing == null) return ResponseEntity.notFound().build();
        existing.setEmail(payload.getEmail());
        userService.save(existing);
        existing.setPassword(null);
        return ResponseEntity.ok(existing);
    }
    @PreAuthorize("hasRole('EMPLOYEE')")
    @GetMapping("/projects")
    public List<Project> myProjects(Principal principal) {
        log.info("fetching project list");
        return projectService.findByAssignedToContains(principal.getName());
    }


    @PreAuthorize("hasRole('EMPLOYEE')")
    @GetMapping("/tasks")
    public List<Task> myTasks(Principal principal) {

        log.info("fetching all the task list");
        return taskService.findByAssignedTo(principal.getName());
    }

    @Autowired
    private EmailService emailService;
    @PreAuthorize("hasRole('EMPLOYEE')")
    @PostMapping("/email/parse")
    public ResponseEntity<?> parseEmail(@RequestBody String rawEmail) {
        System.out.println("Received rawEmail (length " + rawEmail.length() + "):");
        System.out.println(rawEmail);
        try {
            Email savedEmail = emailService.parseAndSaveEmail(rawEmail);
            return ResponseEntity.ok(savedEmail);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to parse email: " + e.getMessage());
        }
    }
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('MANAGER')")
    @PostMapping("/excel/import")
    public ResponseEntity<String> importExcel(@RequestParam("file") MultipartFile file) {
        try {
            excelService.importExcel(file);
            return ResponseEntity.ok("File imported successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to import file: " + e.getMessage());
        }
    }
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('MANAGER')")
    @GetMapping("/excel/export")
    public ResponseEntity<byte[]> exportExcel() {
        try {
            ByteArrayInputStream stream = excelService.exportExcel();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=employees.xlsx")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(stream.readAllBytes());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}