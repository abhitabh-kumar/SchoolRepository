package io.backend.Backend.service;



import io.backend.Backend.model.StudentEntity;

import java.util.List;

public interface StudentService {

    StudentEntity createStudent(StudentEntity studententity);
    StudentEntity getStudentEntityById(Long id);
    StudentEntity updateStudentById(Long id, StudentEntity studententity);
    List<StudentEntity> getallstudent();
     void deleteStudentEntity(Long id);

}
