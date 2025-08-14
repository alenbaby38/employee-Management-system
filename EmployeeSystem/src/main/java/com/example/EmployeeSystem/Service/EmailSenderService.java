package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Exceptions.EmailException;
import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Slf4j
@Service
public class EmailSenderService {

    private final JavaMailSender mailSender;

    public EmailSenderService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendLoginNotification(String to, String name) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Login Notification");
        message.setText("Hi " + name + ", you have logged in to Ems website successfully.");


        message.setFrom("alen.baby@smartdocs.ai");
        log.info("mail sent to user {}",to);
        mailSender.send(message);
    }
    public void sendCustomMail(String to, String Subject , String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(Subject);
        message.setText(body);


        message.setFrom("alen.baby@smartdocs.ai");
        log.info("mail sent to {}",to);
        mailSender.send(message);
    }
    public void sendCustomEmail(String to, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);
            message.setFrom("alen.baby@smartdocs.ai");

            log.info("Weekly email sent to {}", to);
            mailSender.send(message);
        } catch (Exception e) {
            throw new EmailException("email is not valid");
        }

    }


}