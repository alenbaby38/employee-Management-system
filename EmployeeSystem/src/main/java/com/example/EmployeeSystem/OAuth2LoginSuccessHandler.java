//package com.example.EmployeeSystem;
//
//import com.example.EmployeeSystem.Model.Role;
//import com.example.EmployeeSystem.Model.User;
//import com.example.EmployeeSystem.Repository.UserRepository;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//@Component
//public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public OAuth2LoginSuccessHandler(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request,
//                                        HttpServletResponse response,
//                                        Authentication authentication)
//            throws IOException, ServletException {
//
//        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
//        String email = (String) oAuth2User.getAttributes().get("email");
//
//        if (email == null) {
//            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Email not found from OAuth2 provider");
//            return;
//        }
//
//        User user = userRepository.findByUsername(email).orElseGet(() -> {
//            User newUser = new User();
//            newUser.setUsername(email);
//            newUser.setEmail(email);
//            newUser.setRole(Role.EMPLOYEE);
//            newUser.setPassword(""); // OAuth2 users have no password
//            return userRepository.save(newUser);
//        });
//
//        String jwtToken = jwtUtil.generateToken(user);
//
//        // Redirect to Angular frontend with JWT token as query param
//        String redirectUrl = "http://localhost:4200/oauth2/success?token=" + jwtToken;
//        response.sendRedirect(redirectUrl);
//    }
//}
