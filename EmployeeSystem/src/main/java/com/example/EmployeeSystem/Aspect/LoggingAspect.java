package com.example.EmployeeSystem.Aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
    @Before("execution(* com.example.EmployeeSystem.Service.UserService.findAll(..))")
    public void FindAllBefore() {
        System.out.println(" Manager is trying to hit the employee list endpoint");
    }

    @After("execution(* com.example.EmployeeSystem.Service.UserService.findAll(..))")
    public void FindALlAfter() {
        System.out.println(" Manager is looking got the list of employees");
    }

//    @Around("execution(* com.example.EmployeeSystem.Service.ProjectService.findByName(..))")
//    public Object findNameLog(ProceedingJoinPoint joinPoint) throws Throwable {
//        System.out.println("user is trying to fetch the details of the project.....");
//        Object result = joinPoint.proceed();
//        System.out.println("the project details is sent to the user");
//        return result;
//    }
}