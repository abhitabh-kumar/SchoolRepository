package io.backend.Backend.controller;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.QuestionEntity;
import io.backend.Backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/question")
@RequiredArgsConstructor
@Slf4j
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping("/createQuestion")
    public ResponseEntity<ResponseDetails> createExam(@RequestBody QuestionEntity question) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", question);
        ResponseDetails responseDetails = questionService.createQuestion(question);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDetails> getQuestion(@PathVariable("id") Long id){
        log.info("fetching data of {}",id);
        ResponseDetails responseDetails = questionService.getQuestion(id);
        return ResponseEntity.ok(responseDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDetails> updateQuestion(@PathVariable("id") Long id, @RequestBody QuestionEntity question){
        log.info("fetching data of {}",id);
        ResponseDetails responseDetails = questionService.updateQuestion(id, question);
        return ResponseEntity.ok(responseDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable("id") Long id){
        boolean isDeleted = questionService.deleteQuestion(id);
        if (isDeleted) {
            return new ResponseEntity<>("Question deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Question not found", HttpStatus.NOT_FOUND);
        }
    }
}
