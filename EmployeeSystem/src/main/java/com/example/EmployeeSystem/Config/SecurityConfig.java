package com.example.EmployeeSystem.Config;

import com.example.EmployeeSystem.CustomOAuth2User;
import com.example.EmployeeSystem.CustomUserDetailsService;
import com.example.EmployeeSystem.JwtAuthenticationFilter;
import com.example.EmployeeSystem.JwtUtil;
import com.example.EmployeeSystem.Model.Role;
import com.example.EmployeeSystem.Model.User;
import com.example.EmployeeSystem.Repository.UserRepository;
import com.example.EmployeeSystem.Service.EmailSenderService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired private JwtAuthenticationFilter jwtAuthenticationFilter;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private UserRepository userRepository;
    @Autowired private CustomUserDetailsService customUserDetailsService;
    @Autowired private EmailSenderService senderService;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**", "/oauth2/**", "/login", "/error").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin().disable()  // Disable default form login
                .oauth2Login(oauth2 -> oauth2
                        .successHandler((request, response, authentication) -> {
                            CustomOAuth2User oAuth2User = new CustomOAuth2User((OAuth2User) authentication.getPrincipal());
                            String email = oAuth2User.getEmail();
                            senderService.sendLoginNotification(email, email);
                            User user = userRepository.findByUsername(email).orElseGet(() -> {
                                User newUser = new User();
                                newUser.setUsername(email);
                                newUser.setEmail(email);
                                newUser.setRole(Role.EMPLOYEE);
                                newUser.setPassword(""); // no password for OAuth2 users
                                return userRepository.save(newUser);
                            });

                            String token = jwtUtil.generateToken(user);
                            // Redirect Angular app with JWT token in query param
                            response.sendRedirect("http://localhost:4200/oauth2?token=" + token);
                        })
                )
                // Return 401 Unauthorized for unauthenticated API requests instead of redirecting
                .exceptionHandling(exception -> exception
                        .authenticationEntryPoint((request, response, authException) -> {
                            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                        })
                );

        // Add JWT filter before UsernamePasswordAuthenticationFilter
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:4200"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
