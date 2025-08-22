package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

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

//    @Cacheable(value = "studentCache", key = "rollNo")
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

//    @Cacheable(value = "studentCache", key = "'name'")
    public ResponseDetails getStudentsByName(String name){
        StudentEntity student = studentRepo.findByUserName(name);
        if(student != null){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
            log.info("Student with UserName {} fetched", name);
            return responseDetails;
        }
        log.error("Student with UserName {} not found", name);
        throw new NotFoundException("Student with this UserName not found");
    }

//    @Cacheable(value = "studentCache", key = "'allStudent'")
    public ResponseDetails  getAllStudents(){
        List<StudentEntity> student = studentRepo.findAll();
        if(!student.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Student fetched successfully",
                    student);
            return responseDetails;
        }
        throw new NotFoundException("Student not found");
    }

//    @Cacheable(value = "studentCache", key = "#id")
    public ResponseDetails getStudentById(Long id){
        StudentEntity student = studentRepo.findByUserId(id);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                student);
        return responseDetails;
    }

//    @CachePut(value = "studentCache", key = "#id")
    @Transactional
    public ResponseDetails updateStudent(StudentEntity student, Long id){
           log.info("Fetching student by studentId {}",id);
           StudentEntity studentEntity = studentRepo.findById(id).get();
           try {
               if (studentEntity != null) {
                   studentEntity.setAge(student.getAge());
                   studentEntity.setGrade(student.getGrade());
                   studentEntity.setName(student.getName());
                   studentEntity.setEmailId(student.getEmailId());
                   studentEntity.setFatherName(student.getFatherName());
                   studentEntity.setMobileNumber(student.getMobileNumber());
                   studentEntity.setMotherName(student.getMotherName());
                   studentEntity.setUserName(student.getUserName());
                   studentEntity.setDateOfBirth(student.getDateOfBirth());
                   studentEntity.setDateOfJoining(student.getDateOfJoining());
                   studentEntity.setAddress(student.getAddress());
                   log.info("Saved student by studentId {}", id);
                   studentRepo.save(studentEntity);
               }
           } catch (Exception e) {
               throw new RuntimeException(e);
           }
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                studentEntity);
           return responseDetails;
    }

//    @CacheEvict(value = "studentCache", key = "#id")
    public boolean deleteStudent(Long id){
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    // Runs every year on January 1st at 12:00 AM
    @Scheduled(cron = "0 0 0 1 1 *")
    @Transactional
    public void promoteStudents() {
        List<StudentEntity> students = studentRepo.findAll() ;
        for (StudentEntity student : students) {
            student.setGrade(student.getGrade() + 1); // Increase class by 1
        }
        studentRepo.saveAll(students);
        log.info("Students promoted to the next class!");
    }
}
