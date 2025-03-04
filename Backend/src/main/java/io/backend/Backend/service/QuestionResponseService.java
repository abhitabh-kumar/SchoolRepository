package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.QuestionResponseEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.QuestionResponseRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class QuestionResponseService {

    final private QuestionResponseRepo questionResponseRepo;

    public ResponseDetails getQuestionResponseByResultId(String resultId){
        log.info("Entered into getQuestionResponseByResultId in QuestionResponseService");
        List<QuestionResponseEntity> questionResponse = null;
        try{
            questionResponse = questionResponseRepo.findByResult_ResultId(Long.valueOf(resultId));
        }catch (Exception e){
            log.error("Error occur while fetching response : {} ",e.getMessage());
            throw new RuntimeException("Error occur while fetching response. Please try after some time");
        }
        if(questionResponse == null || questionResponse.isEmpty()){
            log.error("Question Response is not found regrading provided result_id : {}",resultId);
            throw new NotFoundException("your given response is not found");
        }
        return ResponseDetails.builder()
                .code(String.valueOf(HttpStatus.OK.value()))
                .data(questionResponse)
                .message("Response fetch successfully").build();
    }
}
