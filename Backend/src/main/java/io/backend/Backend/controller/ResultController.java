package io.backend.Backend.controller;

import io.backend.Backend.dto.QuestionResponseDTO;
import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.ResultEntity;
import io.backend.Backend.service.ResultService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/result")
@RequiredArgsConstructor
@Slf4j
public class ResultController {

    private final ResultService resultService;


    @PostMapping("/compute")
    public ResponseEntity<ResponseDetails> showResult(@RequestBody QuestionResponseDTO answer) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", answer);
        ResponseDetails responseDetails =resultService.result(answer);
        return ResponseEntity.ok(responseDetails);
    }

    @GetMapping("/examId")
    public ResponseEntity<ResponseDetails> getAllResult(@PathVariable("examId") Long examId){
        log.info("Getting the Exam Result of All Student");
        ResponseDetails responseDetails = resultService.getResults(examId);
        return ResponseEntity.ok(responseDetails);

    }
}
