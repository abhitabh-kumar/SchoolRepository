package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class StudentService {

    private final StudentRepo studentRepo;

    public StudentEntity createStudent(StudentEntity student) {
        return studentRepo.save(student);
    }
    public ResponseDetails getStudent(String email){
        Optional<StudentEntity> student = studentRepo.findByEmailId(email);
        if(student.isPresent()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student.get());
            log.info("Student with email {} fetched",email);
            return responseDetails;
        }
        log.error("Student with email {} not found",email);
        throw new NotFoundException("Student not found");
    }
}
