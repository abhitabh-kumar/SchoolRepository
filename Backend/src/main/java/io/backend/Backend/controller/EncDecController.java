//package io.backend.Backend.controller;
//
//
//import io.backend.Backend.utils.RSAEncDecUtils;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@Slf4j
//public class EncDecController {
//
//    @Autowired
//    private RSAEncDecUtils service;
//
//    @PostMapping("/enc")
//    public String encrypt(@RequestBody String data) throws Exception {
//        return service.encrypt(data);
//    }
//
//
//    @PostMapping("/dec")
//    public String decrypt(@RequestBody String encryptedData) throws Exception {
//        return service.decrypt(encryptedData);
//    }
//}
