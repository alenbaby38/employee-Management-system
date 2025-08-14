package com.example.EmployeeSystem.Service;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JobB implements Job {
    @Autowired
    private UserService userService;

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        Long CompletedTaskCount = userService.getCompletedTaskCount();
       // System.out.println("total completed task "+CompletedTaskCount);
        Long InCompletedTaskCount = userService.getInCompletedTaskCount();
      //  System.out.println("total incomplete task left: "+InCompletedTaskCount);
    }
}
