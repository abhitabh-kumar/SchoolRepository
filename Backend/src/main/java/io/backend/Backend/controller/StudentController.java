package io.backend.Backend.controller;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
@Slf4j
public class StudentController {

    private final StudentService studentService;

//    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PostMapping("/createStudent")
    public ResponseEntity<ResponseDetails> createStudent(@RequestBody StudentEntity student) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Student:{}", student);
        ResponseDetails responseDetails = studentService.createStudent(student);
        return ResponseEntity.ok(responseDetails);
    }

    @PreAuthorize("hasAnyAuthority('SCOPE_ADMIN','SCOPE_STUDENT','SCOPE_TEACHER')")
    @GetMapping("/getStudentByRollNo")
    public ResponseEntity<ResponseDetails> getStudentRollNo(@RequestParam String rollNo) {
        log.info("Fetching Student with rollNo : {} ", rollNo);
        ResponseDetails responseDetails = studentService.getStudentByRollNo(rollNo);
        return ResponseEntity.ok(responseDetails);
    }

    @PreAuthorize("hasAnyAuthority('SCOPE_ADMIN','SCOPE_TEACHER')")
    @GetMapping("/getStudentsByEmail")
    public ResponseEntity<ResponseDetails> getStudentsByEmailId(@RequestParam String email) {
        log.info("Fetching Student with email : {} ", email);
        ResponseDetails responseDetails = studentService.getStudentsByEmailId(email);
        return ResponseEntity.ok(responseDetails);
    }

}
