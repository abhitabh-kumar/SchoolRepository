package io.backend.Backend.controller;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.tags.Param;

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

//    @PreAuthorize("hasAnyAuthority('SCOPE_ADMIN','SCOPE_STUDENT','SCOPE_TEACHER')")
    @GetMapping("/{grade}")
    public ResponseEntity<ResponseDetails> getStudentGrade(@PathVariable Integer grade) {
        log.info("Fetching Student with rollNo : {} ", grade);
        ResponseDetails responseDetails = studentService.getStudentGrade(grade);
        return ResponseEntity.ok(responseDetails);
    }

//    @PreAuthorize("hasAnyAuthority('SCOPE_ADMIN','SCOPE_TEACHER')")
    @GetMapping("/name/{name}")
    public ResponseEntity<ResponseDetails> getStudentsByName(@PathVariable String name) {
        log.info("Fetching Student with email : {} ", name);
        ResponseDetails responseDetails = studentService.getStudentsByName(name);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ResponseDetails> getStudentId(@PathVariable("id") Long id) {
        log.info("Fetching Student with Id : {} ", id);
        ResponseDetails responseDetails = studentService.getStudentById(id);
        return ResponseEntity.ok(responseDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDetails> updateStudent(@RequestBody StudentEntity student, @PathVariable("id") Long id) {
        log.info("Fetching Student with id : {} ", id);
        ResponseDetails responseDetails = studentService.updateStudent(student, id);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/all")
    public ResponseEntity<ResponseDetails> getAllStudents() {
//        log.info("Fetching Student with email : {} ", email);
        ResponseDetails responseDetails = studentService.getAllStudents();
        return ResponseEntity.ok(responseDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long id){
        boolean isDeleted = studentService.deleteStudent(id);

        if (isDeleted) {
            return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
        }
    }

}
