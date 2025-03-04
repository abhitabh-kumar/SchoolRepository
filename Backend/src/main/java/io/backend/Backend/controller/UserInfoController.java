package io.backend.Backend.controller;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.service.UserInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserInfoController {

    private final UserInfoService userInfoService;

    @PostMapping("/uploadPic")
    public ResponseEntity<ResponseDetails> uploadProfilePic(
            @RequestParam String username,
            @RequestParam("profilePic") MultipartFile file) throws IOException {
            log.info("Entered into uploadProfilePic into user controller");
            byte[] bytes = file.getBytes();
            return ResponseEntity.ok(userInfoService.saveUser(username, bytes));
    }
}
