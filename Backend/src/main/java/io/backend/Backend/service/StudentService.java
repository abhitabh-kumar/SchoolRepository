package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public ResponseDetails getStudentGrade(Integer rollNo){
        List<StudentEntity> student = studentRepo.findByGrade(rollNo);
        if(!student.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
            log.info("Student with rollNo {} fetched", rollNo);
            return responseDetails;
        }
        log.error("Student with rollNo {} not found", rollNo);
        throw new NotFoundException("Student not found");
    }

    public ResponseDetails getStudentsByName(String name){
        List<StudentEntity> student = studentRepo.findByName(name);
        if(!student.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
            log.info("Student with email {} fetched", name);
            return responseDetails;
        }
        log.error("Student with email {} not found", name);
        throw new NotFoundException("Student not found");
    }

    public ResponseDetails  getAllStudents(){
        List<StudentEntity> student = studentRepo.findAll();
        if(!student.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
//            log.info("Student with email {} fetched", email);
            return responseDetails;
        }
//        log.error("Student with email {} not found", );
        throw new NotFoundException("Student not found");
    }

    public ResponseDetails getStudentById(Long id){
        StudentEntity student = studentRepo.findByUserId(id);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                student);
        return responseDetails;
    }

    public ResponseDetails updateStudent(StudentEntity student, Long id){
           StudentEntity studentEntity = studentRepo.findById(id).get();
           if(studentEntity != null){
               studentEntity.setAge(student.getAge());
               studentEntity.setGrade(student.getGrade());
               studentEntity.setName(student.getName());
               studentEntity.setEmailId(student.getEmailId());
               studentEntity.setFatherName(student.getFatherName());
               studentEntity.setMobileNumber(student.getMobileNumber());
               studentEntity.setMotherName(student.getMotherName());
               studentEntity.setUserName(student.getUserName());
               studentRepo.save(studentEntity);
           }
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                studentEntity);
           return responseDetails;
    }

    public void deleteStudent(Long id){
        studentRepo.deleteById(id);
    }
}
