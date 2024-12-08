package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.ExamEntity;
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

    public ResponseDetails createExam(ExamEntity exam){
        ExamEntity examEntity = examRepo.save(exam);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Exam created successfully",
                examEntity);
        log.info("Exam {} created successfully",exam);
        return responseDetails;
    }

    public ResponseDetails getExamById(Long id){
        ExamEntity examEntity = examRepo.findById(id).get();
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Exam Received Successfully", examEntity);
        return responseDetails;
    }

    public ResponseDetails getAllExamList(){
        List<ExamEntity> examEntity = examRepo.findAll();
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Exams Received Successfully", examEntity);
        return responseDetails;
    }

    public ResponseDetails updateExam(Long id, ExamEntity entity){
        ExamEntity examEntity = examRepo.findById(id).get();
        examEntity.setSubject(entity.getSubject());
        examEntity.setQuestions(entity.getQuestions());
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Exam Updated Successfully", examEntity);
        return responseDetails;
    }

    public boolean deleteExam(Long id){
        if (examRepo.existsById(id)) {
            examRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
