package io.backend.Backend.controller;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;


    @CrossOrigin(origins = "*")
    @GetMapping("/sign-in")
    public ResponseEntity<ResponseDetails> authenticateUser(Authentication authentication){
        log.info("This is credentials");
        log.info(authentication.getPrincipal().toString());
        return ResponseEntity.ok(authService.getJwtTokensAfterAuthentication(authentication));
    }
}
