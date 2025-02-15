package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.StudentRepo;
import io.backend.Backend.repo.TeacherRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Cacheable(value = "teacherCache", key = "'allTeachers'")
    public ResponseDetails getAllTeachers(){
        List<TeacherEntity> teacher = teacherRepo.findAll();
        if(!teacher.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Teachers fetched successfully",
                    teacher);
            return responseDetails;
        }
        throw new NotFoundException("Teachers not found");
    }

    @Cacheable(value = "teacherCache", key = "'name'")
    public ResponseDetails getTeacherByUserName(String name){
        List<TeacherEntity> teacher = teacherRepo.findByUserName(name);
        if(!teacher.isEmpty()){
            ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                    "Teacher fetched successfully",
                    teacher);
            log.info("Teacher with UserName {} fetched", name);
            return responseDetails;
        }
        log.error("Teacher not fetched successfully");
        throw new NotFoundException("Teacher not found");

    }

    @Cacheable(value = "teacherCache", key = "#id")
    public ResponseDetails getTeacherById(Long id){
        TeacherEntity teacher = teacherRepo.findByUserId(id);
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Teacher fetched successfully",
                teacher);
        return responseDetails;
    }

    @CachePut(value = "teacherCache", key = "#id")
    @Transactional
    public ResponseDetails updateTeacher(TeacherEntity teacher, Long id){
        TeacherEntity teacherEntity = teacherRepo.findById(id).get();
        try {
            if (teacherEntity != null) {
                teacherEntity.setAge(teacher.getAge());
                teacherEntity.setName(teacher.getName());
                teacherEntity.setEmailId(teacher.getEmailId());
                teacherEntity.setMobileNumber(teacher.getMobileNumber());
                teacherEntity.setUserName(teacher.getUserName());
                teacherEntity.setAddress(teacher.getAddress());
                teacherEntity.setDescription(teacher.getDescription());
                teacherEntity.setQualification(teacher.getQualification());
                teacherRepo.save(teacherEntity);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.OK.value()),
                "Student fetched successfully",
                teacherEntity);
        return responseDetails;
    }

    @CacheEvict(value = "teacherCache", key = "#id")
    public void deleteTeacher(Long id){
        teacherRepo.deleteById(id);
    }
}

