package io.backend.Backend.service;

import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import io.backend.Backend.repo.StudentRepo;
import io.backend.Backend.repo.TeacherRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;

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

}
