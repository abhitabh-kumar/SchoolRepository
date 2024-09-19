package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import io.backend.Backend.repo.TeacherRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class TeacherService {

    private final TeacherRepo teacherRepo;
    private final PasswordEncoder passwordEncoder;

    public ResponseDetails createTeacher(TeacherEntity teacher) throws SQLIntegrityConstraintViolationException {
        if(teacher != null && teacher.getPassword() != null)
            teacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        else throw new SQLIntegrityConstraintViolationException("Missing required field: password");

        TeacherEntity teacherEntity = teacherRepo.save(teacher);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Teacher created successfully",
                teacherEntity);
        log.info("Teacher {} created successfully",teacherEntity);
        return responseDetails;
    }

    public ResponseDetails getAllTeachers(){
        List<TeacherEntity> teacher = teacherRepo.findAll();
        if(!teacher.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Teacher fetched successfully",
                    teacher);
//            log.info("Student with email {} fetched", email);
            return responseDetails;
        }
//        log.error("Student with email {} not found", );
        throw new NotFoundException("Teacher not found");
    }

    public ResponseDetails getTeacherByName(String name){
        List<TeacherEntity> teacher = teacherRepo.findByName(name);
        if(!teacher.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Teacher fetched successfully",
                    teacher);
            log.info("Teacher with email {} fetched", name);
            return responseDetails;
        }
        log.error("Teacher with email {} not found", name);
        throw new NotFoundException("Student not found");

    }

    public ResponseDetails getTeacherById(Long id){
        TeacherEntity teacher = teacherRepo.findByUserId(id);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Stude fetched successfully",
                teacher);
        return responseDetails;
    }


    public ResponseDetails updateTeacher(TeacherEntity teacher, Long id){
        TeacherEntity studentEntity = teacherRepo.findById(id).get();
        if(studentEntity != null){
            studentEntity.setAge(teacher.getAge());
//            studentEntity.setGrade(teacher.getGrade());
            studentEntity.setName(teacher.getName());
            studentEntity.setEmailId(teacher.getEmailId());
//            studentEntity.setFatherName(teacher.getFatherName());
            studentEntity.setMobileNumber(teacher.getMobileNumber());
//            studentEntity.setMotherName(teacher.getMotherName());
            studentEntity.setUserName(teacher.getUserName());
            teacherRepo.save(studentEntity);
        }
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                studentEntity);
        return responseDetails;
    }


    public void deleteTeacher(Long id){
        teacherRepo.deleteById(id);
    }
}

