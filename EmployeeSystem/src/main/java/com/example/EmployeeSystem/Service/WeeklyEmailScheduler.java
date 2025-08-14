package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.User;
import com.example.EmployeeSystem.Repository.UserRepository;
import com.example.EmployeeSystem.Service.EmailSenderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class WeeklyEmailScheduler  implements Job {

    private final EmailSenderService emailSenderService;
    private final UserRepository userRepository;
   // @Scheduled(cron = "0 * * * * *") runs every min
    // runs every monday at 9:00 AM




    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        log.info("Starting weekly notification job...");

        List<User> users = userRepository.findAll();
        for (User user : users) {
            String email = user.getEmail();
            String name = user.getUsername();

            String message = "Hi " + name + ",\n\nThis is your weekly EMS update! 🎯\n\n- Don't forget to submit your DSR.\n- Check your assigned tasks.\n\nRegards,\nEMS Team";

            emailSenderService.sendCustomEmail(email, "Weekly EMS Reminder", message);
        }

        log.info("Weekly notification job completed.");
    }
    }

