package io.backend.Backend.controller;

import io.backend.Backend.dto.MessageDTO;
import io.backend.Backend.service.EmailService;
import jakarta.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/emails")
@Slf4j
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-message")
    public String sendEmail(@RequestBody MessageDTO Message) throws MessagingException {
        String senderEmail =  Message.email;
        String name = Message.name;
        String message = Message.message;
        emailService.sendEmail(senderEmail, name, message);
        return "Email send successfully";
    }

    @PostMapping("/subscriber-message")
    public String sendSubscriber(@RequestBody String email){
           String message = "Welcome to Sushila Public School Community";
           emailService.sendEmailtoSubscriber(email);
           return "Email send successfully";
    }

    @PostMapping("/send-reset-mail")
    public ResponseEntity<?> sendResetPasswordEmail(@RequestBody String toEmail) {
        String resetLink="http://localhost:3000/reset-password?email="+toEmail;
        try {
            emailService.sendResetPasswordEmail(toEmail, resetLink);
            return ResponseEntity.ok().body(Map.of("message", "Send mail successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "The e-mail address is not assigned to any user account. Please try again later."));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestParam String email, @RequestBody String password) {
        log.info("Reset-password is here");
        try {
            log.info("Email: {}", email);
            emailService.setPassword(email, password);
            return ResponseEntity.ok().body(Map.of("message", "Password reset successfully"));
        } catch (Exception e) {
            log.error("Error while resetting password for email {}: {}", email, e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to reset password. Please try again later."));
        }
    }


}