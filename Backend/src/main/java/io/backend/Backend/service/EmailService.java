package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.SubscriberEntity;
import io.backend.Backend.entity.UserInfoEntity;
import io.backend.Backend.repo.SubscriberRepo;
import io.backend.Backend.repo.UserInfoRepo;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Optional;
import java.util.Random;

@Service
@Slf4j
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserInfoRepo userRepository;

    @Autowired
    private SubscriberRepo subscriberRepo;

    public void sendEmail(String senderEmail, String name, String message) throws MessagingException {

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(senderEmail);
        helper.setSubject(name);
        helper.setText(message, true); // Enable HTML

//        helper.setFrom(senderEmail);
        SubscriberEntity subscriberEntity = new SubscriberEntity();
        subscriberEntity.setEmail(senderEmail);
        subscriberEntity.setUserName(name);
        if (!subscriberRepo.existsByEmail(senderEmail)) {
            subscriberRepo.save(subscriberEntity);
        }
        mailSender.send(mimeMessage);
    }


    public void sendEmailtoSubscriber(String toEmail) {
        try {
            // Load the HTML template
            String htmlContent = loadHtmlTemplate("templates/welcome-message.html");

            // Create and send the email
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

            helper.setTo(toEmail);
            helper.setSubject("Welcome to Sushila Public School");
            helper.setText(htmlContent, true); // Enable HTML content
            helper.setFrom("pandeyjeearrah9718@gmail.com");
            SubscriberEntity subscriberEntity = new SubscriberEntity();
            subscriberEntity.setEmail(toEmail);
            if (!subscriberRepo.existsByEmail(toEmail)) {
                subscriberRepo.save(subscriberEntity);
                mailSender.send(mimeMessage);
            }
        } catch (Exception e) {
            throw new RuntimeException("Not able to send the message" + e);
        }
    }


    public void sendResetPasswordEmail(String toEmail, String resetLink) {

        String htmlContent = loadHtmlTemplate("templates/reset-password-template.html");
        htmlContent = htmlContent.replace("{{resetLink}}", resetLink);

        Optional<UserInfoEntity> userInfoEntity = userRepository.findByEmailId(toEmail);
        if (userInfoEntity.isEmpty()) {
            log.info("User does not found in database");
            throw new RuntimeException("User Not Found");
        }
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(toEmail);
            helper.setSubject("Reset Your Password");
            helper.setText(htmlContent, true); // Enable HTML content
            helper.setFrom("pandeyjeearrah9718@gmail.com");
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            log.info("Error occurred while sending email : {} ", e.getMessage());
            throw new RuntimeException("Something went wrong while sending email");
        }
    }

    private String loadHtmlTemplate(String templatePath) {
        try {
            ClassPathResource resource = new ClassPathResource(templatePath);
            return new String(Files.readAllBytes(resource.getFile().toPath()), StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new RuntimeException("Failed to load email template: " + templatePath, e);
        }
    }

    public void setPassword(String email, String password) {
        try {
            UserInfoEntity userInfoEntity = userRepository.findByEmailId(email).get();
            String encryptedPassword = passwordEncoder.encode(password);
            userInfoEntity.setPassword(encryptedPassword);
            userRepository.save(userInfoEntity);
        } catch (Exception e) {
            log.info("Error occured while setting password :" + email);
            throw new RuntimeException("Error occured while setting password :" + e.getMessage());
        }
    }

    public ResponseDetails sendOtp(String senderEmail) {
        log.info("Entered into sendOtp method in EmailService");
        Optional<UserInfoEntity> userInfoEntity = userRepository.findByEmailId(senderEmail);
        if (userInfoEntity.isEmpty()) {
            log.info("User does not found in database : {}", senderEmail);
            throw new RuntimeException("User doesn't exist");
        }
        String name = userInfoEntity.get().getUserName();
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        String htmlContent = loadHtmlTemplate("templates/sending-otp.html");
        htmlContent = htmlContent.replace("{{OTP}}", String.valueOf(otp)).replace("{{Name}}", name);

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

            helper.setTo(senderEmail);
            helper.setSubject("OTP for reset password");
            helper.setText(htmlContent, true); // Enable HTML
            helper.setFrom("pandeyjeearrah9718@gmail.com");
            mailSender.send(mimeMessage);

        } catch (Exception e) {
            log.info("Error occur while sending email : {}", e.getMessage());
            throw new RuntimeException("Error occur while sending email");
        }
        return ResponseDetails.builder()
                .code(String.valueOf(HttpStatus.OK.value()))
                .data(otp)
                .message("OTP sent successfully")
                .build();
    }
}

