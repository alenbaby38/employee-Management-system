package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.Email;
import com.example.EmployeeSystem.Repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private EmailRepository emailRepository;

    public Email parseAndSaveEmail(String rawEmail) {
        if (rawEmail != null && rawEmail.length() >= 2
                && rawEmail.startsWith("\"") && rawEmail.endsWith("\"")) {
            rawEmail = rawEmail.substring(1, rawEmail.length() - 1);
        }

        String subject = "No Subject";
        StringBuilder bodyBuilder = new StringBuilder();

        String[] lines = rawEmail.split("\\r?\\n");
        boolean isBody = false;

        for (String line : lines) {
            line = line.trim();
            if (line.toLowerCase().startsWith("subject:")) {
                subject = line.substring(line.indexOf(":") + 1).trim();
            } else if (line.toLowerCase().startsWith("body:")) {
                isBody = true;
                bodyBuilder.append(line.substring(line.indexOf(":") + 1).trim()).append("\n");
            } else if (isBody) {
                bodyBuilder.append(line).append("\n");
            }
        }

        String body = bodyBuilder.toString().trim();

        Email email = new Email();
        email.setSubject(subject);
        email.setBody(body);

        return emailRepository.save(email);
    }
}
