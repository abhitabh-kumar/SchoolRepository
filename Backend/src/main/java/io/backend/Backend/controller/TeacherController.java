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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping("/teacher")
@RequiredArgsConstructor
@Slf4j
public class TeacherController {

    private final TeacherService teacherService;

    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PostMapping("/createTeacher")
    public ResponseEntity<ResponseDetails> createTeacher(@RequestBody TeacherEntity teacher) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Teacher:{}", teacher);
        ResponseDetails responseDetails = teacherService.createTeacher(teacher);
        return ResponseEntity.ok(responseDetails);
    }

}
