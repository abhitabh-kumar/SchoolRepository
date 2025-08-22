package io.backend.Backend.controller;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.QuestionEntity;
import io.backend.Backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/question")
@RequiredArgsConstructor
@Slf4j
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping("/createQuestion")
    public ResponseEntity<ResponseDetails> createQuestion(@RequestBody QuestionEntity question) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", question);
        ResponseDetails responseDetails = questionService.createQuestion(question);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDetails> getQuestionById(@PathVariable("id") Long id){
        log.info("Fetching Question of {}",id);
        ResponseDetails responseDetails = questionService.getQuestion(id);
        return ResponseEntity.ok(responseDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDetails> updateQuestionById(@PathVariable("id") Long id, @RequestBody QuestionEntity question){
        log.info("Updating data of {}",id);
        ResponseDetails responseDetails = questionService.updateQuestion(id, question);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/all")
    public ResponseEntity<List<QuestionEntity>> getAllQuestions(){
        log.info("Fetching questions");
        List<QuestionEntity> Questions = questionService.getAllQuestions();
        return ResponseEntity.ok(Questions);
    }

    @GetMapping("/{subject}")
    public ResponseEntity<ResponseDetails> getQuestionsBySubject(@PathVariable("subject") String subject){
        log.info("Fetching questions of subject {}", subject);
        ResponseDetails responseDetails = questionService.getQuestionsBySubject(subject);
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

    @GetMapping("/paginated")
    public ResponseEntity<ResponseDetails> getPaginatedQuestions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam String grade,
            @RequestParam String subject) {
        ResponseDetails responseDetails = questionService.getPaginatedQuestions(page, size, grade, subject);
        return ResponseEntity.ok(responseDetails);
    }
}
