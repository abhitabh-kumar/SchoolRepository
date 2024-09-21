package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.ExamEntity;
import io.backend.Backend.entity.QuestionEntity;
import io.backend.Backend.repo.ExamRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
@Slf4j
public class ExamService {

    private final ExamRepo examRepo;

    public ResponseDetails createquestion(ExamEntity question){

        ExamEntity questionEntity = examRepo.save(question);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Exam created successfully",
                questionEntity);
        log.info("Exam {} created successfully",question);
        return responseDetails;
    }
}
