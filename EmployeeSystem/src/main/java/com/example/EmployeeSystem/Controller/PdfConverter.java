package com.example.EmployeeSystem.Controller;

import com.example.EmployeeSystem.Model.Project;
import com.example.EmployeeSystem.Model.User;
import com.example.EmployeeSystem.Service.ExcelGenerator;
import com.example.EmployeeSystem.Service.PdfGeneration;
import com.example.EmployeeSystem.Service.ProjectService;
import com.example.EmployeeSystem.Service.UserService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PdfConverter {
    @Autowired
    private final JavaMailSender mailSender;
    @Autowired
    private ProjectService projectService;
    @Autowired
    private UserService userService;
    @Autowired
    private PdfGeneration pdfGeneratorService;

    public PdfConverter(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('MANAGER')")
    @GetMapping("/pdf/projects")
    public ResponseEntity<byte[]> downloadProjectsPdf() {
        List<Project> projects = projectService.findAll();

        ByteArrayInputStream pdfStream = pdfGeneratorService.generateProjectsPdf(projects);

        byte[] pdfBytes = pdfStream.readAllBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=projects.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }

    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('MANAGER')")
    @GetMapping("/pdf/users")
    public ResponseEntity<byte[]> downloadUsersPdf() {
        List<User> users = userService.findAll();

        ByteArrayInputStream pdfStream = pdfGeneratorService.generateUsersPdf(users);

        byte[] pdfBytes = pdfStream.readAllBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=projects.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }

    @Autowired
    private ExcelGenerator excelGenerator;
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/export")
    public ResponseEntity<InputStreamResource> exportUsersToExcel() throws IOException {
        List<User> users = userService.findAll();
        ByteArrayInputStream excelFile = excelGenerator.generateUserExcel(users);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=users.xlsx");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(new InputStreamResource(excelFile));
    }
    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/send-pdf-upload")
    public ResponseEntity<String> sendPdfUploadEmail(
            @RequestParam("email") String email,
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please upload a non-empty file.");
        }

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(email);
            helper.setSubject("Here is your PDF");
            helper.setText("Please find the attached PDF.", false);
            helper.setFrom("alen.baby@smartdocs.ai");

            helper.addAttachment(file.getOriginalFilename(),
                    new ByteArrayResource(file.getBytes()),
                    file.getContentType() != null ? file.getContentType() : "application/pdf");

            mailSender.send(message);

            return ResponseEntity.ok("Email with PDF sent successfully to " + email);

        } catch (MessagingException | IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send email: " + e.getMessage());
        }
    }


}


