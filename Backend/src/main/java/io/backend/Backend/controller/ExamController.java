package io.backend.Backend.controller;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.ExamEntity;
import io.backend.Backend.service.ExamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/exam")
@RequiredArgsConstructor
@Slf4j
public class ExamController {

    private final ExamService examService;

    @PostMapping("/createExam")
    public ResponseEntity<ResponseDetails> createExam(@RequestBody ExamEntity exam) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", exam);
        ResponseDetails responseDetails = examService.createExam(exam);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ResponseDetails> getExamById(@PathVariable("id") Long id ){
           log.info("fetching exam {} ", id);
           ResponseDetails responseDetails =examService.getExamById(id);
           return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/getAll")
    public ResponseEntity<ResponseDetails> getAllExam(){
        log.info("fetching all exam list");
        ResponseDetails responseDetails =examService.getAllExamList();
        return ResponseEntity.ok(responseDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDetails> updateExam(@PathVariable("id") Long id, @RequestBody ExamEntity entity ){
        log.info("Updateing Exam {}", id);
        ResponseDetails responseDetails = examService.updateExam(id,entity);
        return ResponseEntity.ok(responseDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExam(@PathVariable("id") Long id){
        boolean isDeleted = examService.deleteExam(id);
        if (isDeleted) {
            return new ResponseEntity<>("Exam deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Exam not found", HttpStatus.NOT_FOUND);
        }
    }
}
