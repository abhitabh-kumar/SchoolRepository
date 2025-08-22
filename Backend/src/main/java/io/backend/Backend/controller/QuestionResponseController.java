package io.backend.Backend.controller;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.service.QuestionResponseService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questionResponse")
@Slf4j
@AllArgsConstructor
public class QuestionResponseController {

    final private QuestionResponseService questionResponseService;

    @GetMapping("/fetchByResultId={resultId}")
    public ResponseDetails getQuestionResponseByResultId(@PathVariable String resultId){
        log.info("Entered into getQuestionResponseByResultId in QuestionResponseController");
        return questionResponseService.getQuestionResponseByResultId(resultId);
    }
}
