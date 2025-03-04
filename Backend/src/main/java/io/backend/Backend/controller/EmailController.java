package io.backend.Backend.controller;

import io.backend.Backend.dto.MessageDTO;
import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.service.EmailService;
import jakarta.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Random;


@RestController
@RequestMapping("/api/emails")
@Slf4j
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-message")
    public String sendEmail(@RequestBody MessageDTO Message) throws MessagingException {
        String senderEmail = Message.email;
        String name = Message.name;
        String message = Message.message;
        emailService.sendEmail(senderEmail, name, message);
        return "Email send successfully";
    }

    @PostMapping("/subscriber-message")
    public String sendSubscriber(@RequestBody String email) {
        String message = "Welcome to Sushila Public School Community";
        emailService.sendEmailtoSubscriber(email);
        return "Email send successfully";
    }

    @PostMapping("/send-reset-mail")
    public ResponseEntity<?> sendResetPasswordEmail(@RequestBody String toEmail){
        String resetLink = "http://localhost:3000/reset-password?email=" + toEmail;
        emailService.sendResetPasswordEmail(toEmail, resetLink);
        ResponseDetails responseDetails = ResponseDetails.builder()
                .message("email send successfully")
                .code(String.valueOf(HttpStatus.OK.value())).build();
        return ResponseEntity.ok().body(responseDetails);
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

    @PostMapping("/generateOtp")
    public ResponseEntity<ResponseDetails> otpGenerate(@RequestBody String toEmail) {
        log.info("Entered into otpGenerate method in EmailController");
        ResponseDetails responseDetails = emailService.sendOtp(toEmail);
        return ResponseEntity.status(HttpStatus.OK).body(responseDetails);
    }

}