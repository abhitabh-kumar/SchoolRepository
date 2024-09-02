package io.backend.Backend.service;


import io.backend.Backend.model.StudentEntity;
import io.backend.Backend.repository.StudentyEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImp implements StudentService {

    @Autowired
    private StudentyEntityRepository studententityrepository;

    @Override
    public StudentEntity createStudent(StudentEntity studententity) {
        return studententityrepository.save(studententity);
    }

    @Override
    public StudentEntity getStudentEntityById(Long id) {
        return studententityrepository.findById(id).orElse(null);
    }

//   @Override
//    public studentEntity updateStudentById(Long id, studentEntity studententity) {
//        studentEntity  thestudententity = studententityrepository.findById(id).orElse(null);
//        thestudententity.set
//       return studententityrepository.save(thestudententity);
//    }


    @Override
    public List<StudentEntity> getallstudent() {
        return studententityrepository.findAll();
    }

    @Override
    public void deleteStudentEntity(Long id) {
           studententityrepository.deleteById(id);
    }
}
