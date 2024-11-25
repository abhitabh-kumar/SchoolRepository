package io.backend.Backend.controller;

import io.backend.Backend.dto.QuestionResponseDTO;
import io.backend.Backend.entity.ResultEntity;
import io.backend.Backend.service.ResultService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/result")
@RequiredArgsConstructor
@Slf4j
public class ResultController {

    private final ResultService resultService;


    @PostMapping("/compute")
    public ResponseEntity<ResultEntity> showResult(@RequestBody QuestionResponseDTO answer) throws SQLIntegrityConstraintViolationException {
        log.info("Creating Question:{}", answer);
        ResultEntity s=resultService.result(answer);
        return ResponseEntity.ok(s);
    }
}
