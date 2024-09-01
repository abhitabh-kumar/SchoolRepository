package io.backend.Backend.service;



import io.backend.Backend.model.StudentEntity;

import java.util.List;

public interface StudentService {

    StudentEntity createStudent(StudentEntity studententity);
    StudentEntity getStudentEntityById(Long id);
//    studentEntity updateStudentById(Long id, studentEntity studententity);
    List<StudentEntity> getallstudent();
     void deleteStudentEntity(Long id);

}
