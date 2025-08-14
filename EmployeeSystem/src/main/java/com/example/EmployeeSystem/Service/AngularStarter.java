//package com.example.EmployeeSystem.Service;
//
//import jakarta.annotation.PostConstruct;
//import jakarta.annotation.PreDestroy;
//import org.springframework.stereotype.Component;
//
//import java.io.File;
//import java.io.IOException;
//
//@Component
//public class AngularStarter {
//
//    private Process angularProcess;
//
//    @PostConstruct
//    public void startAngularApp() {
//        try {
//            // Path to Angular project
//            File projectDir = new File("D:\\project files\\Crud operations\\frontend\\employeesystem");
//
//            // Command to run ng serve
//            ProcessBuilder builder = new ProcessBuilder("cmd.exe", "/c", "ng serve");
//            builder.directory(projectDir);
//            builder.inheritIO(); // Optional: To see ng serve output in console
//
//            angularProcess = builder.start();
//
//            System.out.println("✅ Angular frontend started with 'ng serve'...");
//
//        } catch (IOException e) {
//            System.err.println("❌ Failed to start Angular:");
//            e.printStackTrace();
//        }
//    }
//
//    @PreDestroy
//    public void stopAngularApp() {
//        if (angularProcess != null && angularProcess.isAlive()) {
//            angularProcess.destroy();
//            System.out.println("🛑 Angular process stopped.");
//        }
//    }
//}
