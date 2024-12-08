package io.backend.Backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.QuestionEntity;
import io.backend.Backend.repo.QuestionRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class QuestionService {

    private final QuestionRepo questionRepo;
    private final ObjectMapper objectMapper;

    public ResponseDetails createQuestion(QuestionEntity question){
        questionRepo.save(question);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Question created successfully",
                question);
        log.info("Question {} created successfully",question);
        return responseDetails;
    }

    public ResponseDetails getQuestion(Long id){
        QuestionEntity questionEntity = questionRepo.getReferenceById(id);
        log.info("fetching data of {}",id);
        log.info("Data is {}", questionEntity);
        return new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Question fetched successfully",
                questionEntity);
    }
    public ResponseDetails updateQuestion(Long id, QuestionEntity question){
        QuestionEntity questionEntity = questionRepo.getReferenceById(id);
        questionEntity.setQuestion(question.getQuestion());
        questionEntity.setOptions(question.getOptions());
        questionEntity.setMarks(question.getMarks());
        questionEntity.setAnswer(question.getAnswer());
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Updated Question successfully",
                questionEntity);
        return responseDetails;
    }

    public boolean deleteQuestion(Long id){
        if (questionRepo.existsById(id)) {
            questionRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
