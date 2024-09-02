package io.backend.Backend.service;


import io.backend.Backend.model.TeacherEntity;
import io.backend.Backend.repository.TeacherEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherEntityRepository teacherentityrepository;

    @Override
    public TeacherEntity createTeacher(TeacherEntity teacherentity) {
           return teacherentityrepository.save(teacherentity);
    }

    @Override
    public TeacherEntity getTeacherEntityById(Long id) {
        return teacherentityrepository.findById(id).orElse(null);
    }


    @Override
    public TeacherEntity getTeacherEntityByEmail(String email) {
        return teacherentityrepository.findAllByEmailNative(email);
    }
    @Override
    public TeacherEntity updateStudentById(Long id, TeacherEntity teacherentity) {
        return null;
    }

    @Override
    public List<TeacherEntity> getallteacher() {
        return teacherentityrepository.findAll();
    }

    @Override
    public void deleteteacherEntity(Long id) {
        TeacherEntity theteacherentity = teacherentityrepository.findById(id).orElse(null);
        if(theteacherentity!=null)
        {
            teacherentityrepository.deleteById(id);
        }
    }
}
