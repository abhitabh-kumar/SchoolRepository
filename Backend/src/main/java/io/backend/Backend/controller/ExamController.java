package io.backend.Backend.controller;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.ExamEntity;
import io.backend.Backend.service.ExamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/question")
@RequiredArgsConstructor
@Slf4j
public class ExamController {

    private final ExamService examService;

    @PostMapping("/createQuestion")
    public ResponseEntity<ResponseDetails> createExam(@RequestBody ExamEntity exam) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", exam);
        ResponseDetails responseDetails = examService.createquestion(exam);
        return ResponseEntity.ok(responseDetails);
    }
}
