//package io.backend.Backend.controller;
//
//import io.backend.Backend.entity.StudentEntity;
//import io.backend.Backend.service.StudentService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/student")
//@RequiredArgsConstructor
//public class StudentController {
//
//    private final StudentService studentService;
//
//    @PostMapping("/create")
//    public ResponseEntity<StudentEntity> createStudent(@RequestBody StudentEntity student) {
//        StudentEntity newStudent = studentService.createStudent(student);
//        return ResponseEntity.ok(newStudent);
//    }
//
//}
