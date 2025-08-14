package com.example.EmployeeSystem.Config;

import com.example.EmployeeSystem.Service.ListEmployeesScheduler;
import com.example.EmployeeSystem.Service.WeeklyEmailScheduler;
import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

import java.util.Date;

@Configuration
public class QuartzConfig {
    @Bean
    public JobDetail emailJobDetail() {
        return JobBuilder.newJob(WeeklyEmailScheduler.class)
                .withIdentity("emailJob")
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger emailJobTrigger() {
        SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
                .withIntervalInMinutes(3)
                .repeatForever();

        Date startTime = DateBuilder.futureDate(3, DateBuilder.IntervalUnit.MINUTE);

        return TriggerBuilder.newTrigger()
                .forJob(emailJobDetail())
                .withIdentity("emailTrigger")
                .withSchedule(scheduleBuilder)
                .startAt(startTime) // ← This delays the first fire
                .build();
    }
    @Bean
    public JobDetail ListEmployeeScheduler(){
        return JobBuilder.newJob(ListEmployeesScheduler.class)
                .withIdentity("users")
                .storeDurably()
                .build();
    }
    @Bean
    public Trigger ListEmployee(){
        SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
                .withIntervalInMinutes(1)
                .repeatForever();
        return TriggerBuilder.newTrigger()
                .forJob(ListEmployeeScheduler())
                .withIdentity("listEmployeeTrigger")
                .withSchedule(scheduleBuilder)
                .build();
    }

    }


