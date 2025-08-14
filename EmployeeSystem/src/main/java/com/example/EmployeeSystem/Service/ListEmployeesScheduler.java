package com.example.EmployeeSystem.Service;


import com.example.EmployeeSystem.Model.User;
import org.quartz.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Component
public class ListEmployeesScheduler implements Job {

    @Autowired
    private UserService userService;

    @Autowired
    private DSRService dsrService;

    @Autowired
    private Scheduler scheduler;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        List<User> users = userService.findAll();
        users.forEach(user -> System.out.println("USER NAME = " + user.getUsername() + "    EMAIL = " + user.getEmail()));

        try {
            JobKey jobKey = JobKey.jobKey("jobB");

            if (!scheduler.checkExists(jobKey)) {
                JobDetail jobB = JobBuilder.newJob(JobB.class)
                        .withIdentity(jobKey)
                        .storeDurably()
                        .build();

                Trigger triggerB = TriggerBuilder.newTrigger()
                        .forJob(jobB)
                        .withIdentity("triggerB_" + System.currentTimeMillis()) // Unique trigger ID
                        .startNow()
                        .build();

                scheduler.scheduleJob(jobB, triggerB);
                Date nextFireTime = triggerB.getNextFireTime();
                System.out.println("Next fire time: " + nextFireTime);
            } else {
                // Job already exists, just trigger it again (if needed)
                scheduler.triggerJob(jobKey);
            }
        } catch (SchedulerException e) {
            System.out.println("Failed to schedule JobB: " + e.getMessage());
        }
    }
}