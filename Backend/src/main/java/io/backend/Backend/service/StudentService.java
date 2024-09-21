package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class StudentService {

    private final StudentRepo studentRepo;
    private final PasswordEncoder passwordEncoder;

    public ResponseDetails createStudent( StudentEntity student) throws SQLIntegrityConstraintViolationException {
        if(student != null && student.getPassword() != null)
            student.setPassword(passwordEncoder.encode(student.getPassword()));
        else throw new SQLIntegrityConstraintViolationException("Missing required field: password");

        StudentEntity studentEntity = studentRepo.save(student);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                studentEntity);
        log.info("Student {} created successfully",student);
        return responseDetails;
    }

    public ResponseDetails getStudentByRollNo(String rollNo){
        Optional<StudentEntity> student = studentRepo.findByRollNo(rollNo);
        if(student.isPresent()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student.get());
            log.info("Student with rollNo {} fetched", rollNo);
            return responseDetails;
        }
        log.error("Student with rollNo {} not found", rollNo);
        throw new NotFoundException("Student not found");
    }

    public ResponseDetails getStudentsByEmailId(String email){
        List<StudentEntity> student = studentRepo.findByEmailId(email);
        if(!student.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
            log.info("Student with email {} fetched", email);
            return responseDetails;
        }
        log.error("Student with email {} not found", email);
        throw new NotFoundException("Student not found");
    }
    public ResponseDetails getStudentId(Long id){
        Optional<StudentEntity> student = studentRepo.findByUserId(id);
        if(student.isPresent()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student.get());
            log.info("Student with id {} fetched", id);
            return responseDetails;
        }
        log.error("Student with id {} not found", id);
        throw new NotFoundException("Student not found");
    }
}
