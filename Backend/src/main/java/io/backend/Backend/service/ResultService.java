package io.backend.Backend.service;

import io.backend.Backend.dto.QuestionResponseDTO;
import io.backend.Backend.dto.StudentResponseDTO;
import io.backend.Backend.entity.*;
import io.backend.Backend.repo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ResultService {
    private final QuestionRepo questionRepo;
    private final QuestionResponseRepo questionResponseRepo;
    private final ExamRepo examRepo;
    private final StudentRepo studentRepo;
    private final ResultRepo resultRepo;

    public ResultEntity result(QuestionResponseDTO response){
           Long examId = response.getExamId();
           Long studentId = response.getUserId();
           List<StudentResponseDTO> questions= response.getQuestionEntityDto();
           Integer obtainedMarks = 0;
           ExamEntity examEntity = examRepo.getByExamId(examId);
           StudentEntity userInfoEntity = studentRepo.getById(studentId);
        for (StudentResponseDTO studentResponse : questions) {
            Long questionId = studentResponse.getQuestionId();
            QuestionEntity questionEntity = questionRepo.getById(questionId);
            String correctAnswer = questionEntity.getAnswer();

            QuestionResponseEntity questionResponseEntity = QuestionResponseEntity.builder()
                    .exam(examEntity)
                    .student(userInfoEntity)
                    .selectedOption(studentResponse.getResponse())
                    .question(questionEntity)
                    .build();

            if (studentResponse.getResponse().equals(correctAnswer)) {
                obtainedMarks += questionEntity.getMarks();
            }

            // Save the question response entity
            questionResponseRepo.save(questionResponseEntity);
        }


        ResultEntity resultEntity = ResultEntity.builder()
                .exam(examEntity)  // Set the exam entity
                .student(userInfoEntity)  // Set the student entity
                .obtainedMarks(obtainedMarks)  // Set the obtained marks
                .build();  // Build the ResultEntity object using the builder

        resultRepo.save(resultEntity);  // Save the result entity
        return resultEntity;  // Return the result entity

    }

}
