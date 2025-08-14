//package com.example.EmployeeSystem.Config;
//
//import org.quartz.spi.TriggerFiredBundle;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.quartz.SpringBeanJobFactory;
//import org.springframework.stereotype.Component;
//
//@Component
//public class AutowiringSpringBeanJobFactory extends SpringBeanJobFactory {
//
//    @Autowired
//    private ApplicationContext applicationContext;
//
//    @Override
//    protected Object createJobInstance(TriggerFiredBundle bundle) throws Exception {
//        Object job = super.createJobInstance(bundle);
//        applicationContext.getAutowireCapableBeanFactory().autowireBean(job);
//        return job;
//    }
//}