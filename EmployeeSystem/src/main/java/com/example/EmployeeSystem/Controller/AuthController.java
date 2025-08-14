package com.example.EmployeeSystem.Controller;

import com.example.EmployeeSystem.JwtUtil;
import com.example.EmployeeSystem.Model.LoginRequest;
import com.example.EmployeeSystem.Model.User;
import com.example.EmployeeSystem.Repository.UserRepository;
import com.example.EmployeeSystem.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;
@Autowired private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) throws IOException {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            log.error("user already exists{}",user.getUsername());
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "User already exists"));

        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.save(user);
        log.info("{} successfully created",user.getUsername());
        return ResponseEntity.ok(Map.of("message", "User registered successfully"));

    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        User user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
        String token = jwtUtil.generateToken(user);
        log.info("{} successfully logged",user.getUsername());
        return ResponseEntity.ok(Map.of("token", token));
    }
}