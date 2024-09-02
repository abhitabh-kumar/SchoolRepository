package io.backend.Backend.service;



import io.backend.Backend.model.TeacherEntity;

import java.util.List;

public interface TeacherService {
    TeacherEntity createTeacher(TeacherEntity teacherentity);
    TeacherEntity getTeacherEntityById(Long id);
    TeacherEntity updateStudentById(Long id, TeacherEntity teacherentity);

    TeacherEntity getTeacherEntityByEmail(String email);
    List<TeacherEntity> getallteacher();
    void deleteteacherEntity(Long id);
}
