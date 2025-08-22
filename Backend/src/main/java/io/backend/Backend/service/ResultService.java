package io.backend.Backend.service;

import io.backend.Backend.dto.QuestionResponseDTO;
import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.dto.StudentResponseDTO;
import io.backend.Backend.entity.*;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ResultService {
    private final QuestionRepo questionRepo;
    private final QuestionResponseRepo questionResponseRepo;
    private final ExamRepo examRepo;
    private final StudentRepo studentRepo;
    private final ResultRepo resultRepo;

    @Transactional
    public ResponseDetails result(QuestionResponseDTO response) {
        log.info("Entered into result method into ResultService");
        Long examId = response.getExamId();
        String userName = response.getUserName();
        Map<Long, Long> questions = response.getQuestionEntityDto();

        log.info("Fetching Exam By examId {}", examId);
        ExamEntity examEntity = examRepo.getByExamId(examId);
        Integer obtainedMarks = examEntity.getQuestions().stream().filter(q -> questions.containsKey(q.getQuestionId()))
                .map(q -> String.valueOf(questions.get(q.getQuestionId())).equals(q.getAnswer()) ? q.getMarks() : 0)
                .reduce(0,Integer::sum);
        int totalMarks = examEntity.getQuestions().stream().mapToInt(QuestionEntity::getMarks).sum();

        log.info("Fetching student by userName {}", userName);
        StudentEntity userInfoEntity = studentRepo.findByUserName(userName);
        if (userInfoEntity == null) {
            log.error("User not found");
            throw new NotFoundException("User not found");
        }

        log.info("Question Response saved successfully");
        ResultEntity resultEntity = ResultEntity.builder()
                .exam(examEntity)
                .student(userInfoEntity)
                .obtainedMarks(obtainedMarks)
                .totalMarks(totalMarks)
                .build();
        resultRepo.save(resultEntity);

        for (QuestionEntity q : examEntity.getQuestions()) {
            if (questions.containsKey(q.getQuestionId())) {
                Long selectedAnswer = questions.get(q.getQuestionId());

                QuestionResponseEntity questionResponseEntity = QuestionResponseEntity.builder()
                        .exam(examEntity)
                        .student(userInfoEntity)
                        .selectedOption(String.valueOf(selectedAnswer))
                        .question(q)
                        .result(resultEntity)
                        .build();

                questionResponseRepo.save(questionResponseEntity);
            }
        }

        return new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Result saved successfully", resultEntity);
    }

    public ResponseDetails getResults(Long examId) {
        List<ResultEntity> resultEntities = resultRepo.findByExam_ExamId(examId);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Result fetched successfully",
                resultEntities);
        return responseDetails;
    }

    public ResponseDetails getResultsByAuthor(String authorName) {
        try {
            List<ResultEntity> resultEntities = resultRepo.findByExam_Author(authorName);
            if (null == resultEntities || resultEntities.isEmpty()) {
                throw new NotFoundException("Exam is not submitted yet");
            }
            return new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "All Result is fetched successfully",
                    resultEntities);
        } catch (Exception e) {
            log.error("Something went wrong while fetching result : {}",e.getMessage());
            throw new RuntimeException("Something went wrong while fetching result");
        }
    }
    public ResponseDetails getResultsByUserName(String userName) {
        try {
            List<ResultEntity> resultEntities = resultRepo.findByStudent_UserName(userName);
            if (null == resultEntities || resultEntities.isEmpty()) {
                throw new NotFoundException("Exam is not submitted yet");
            }
            return new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "All Result is fetched successfully",
                    resultEntities);
        } catch (Exception e) {
            log.error("Something went wrong while fetching result : {}",e.getMessage());
            throw new RuntimeException("Something went wrong while fetching result");
        }
    }

}
