package io.backend.Backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class HealthCheckUpController {

    @PreAuthorize("hasAnyAuthority('SCOPE_ADMIN','SCOPE_STUDENT','SCOPE_TEACHER')")
    @GetMapping("/welcome-message")
    public ResponseEntity<String> getFirstWelcomeMessage(Authentication authentication){
        return ResponseEntity.ok("Welcome to the Sushila Public School :"+authentication.getName()+"with scope:"+authentication.getAuthorities());
    }

    @PreAuthorize("hasAuthority('SCOPE_TEACHER')")
    @GetMapping("/teacher-message")
    public ResponseEntity<String> getManagerData(Principal principal){
        return ResponseEntity.ok("Teacher::"+principal.getName());
    }

    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PostMapping("/admin-message")
    public ResponseEntity<String> getAdminData(@RequestParam("message") String message, Principal principal){
        return ResponseEntity.ok("Admin::"+principal.getName()+" has this message:"+message);
    }

    @PreAuthorize("hasAuthority('SCOPE_STUDENT')")
    @PostMapping("/student-message")
    public ResponseEntity<String> getStudentData(Principal principal){
        return ResponseEntity.ok("Student::"+principal.getName());
    }

}