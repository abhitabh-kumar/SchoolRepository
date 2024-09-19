package io.backend.Backend.controller;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import io.backend.Backend.service.StudentService;
import io.backend.Backend.service.TeacherService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/teacher")
@RequiredArgsConstructor
@Slf4j
public class TeacherController {

    private final TeacherService teacherService;

//    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PostMapping("/createTeacher")
    public ResponseEntity<ResponseDetails> createTeacher(@RequestBody TeacherEntity teacher) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Teacher:{}", teacher);
        ResponseDetails responseDetails = teacherService.createTeacher(teacher);
        return ResponseEntity.ok(responseDetails);
    }


    @GetMapping("/all")
    public ResponseEntity<ResponseDetails> getAllStudents() {
//        log.info("Fetching Student with email : {} ", email);
        ResponseDetails responseDetails = teacherService.getAllTeachers();
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<ResponseDetails> getTeachersByName(@PathVariable String name) {
        log.info("Fetching Student with email : {} ", name);
        ResponseDetails responseDetails = teacherService.getTeacherByName(name);
        return ResponseEntity.ok(responseDetails);
    }


}
