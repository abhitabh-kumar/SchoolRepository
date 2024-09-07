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

   @Override
    public StudentEntity updateStudentById(Long id, StudentEntity studententity) {
        StudentEntity  thestudententity = studententityrepository.findById(id).orElse(null);
        thestudententity.setAddress(studententity.getAddress());
        thestudententity.setAge(studententity.getAge());
        thestudententity.setEmail(studententity.getEmail());
        thestudententity.setClassname(studententity.getClassname());
        thestudententity.setBloodGroup(studententity.getBloodGroup());
        thestudententity.setDateofBirth(studententity.getDateofBirth());
        thestudententity.setDateOfJoining(studententity.getDateOfJoining());
        thestudententity.setFatherName(studententity.getFatherName());
        thestudententity.setFirstName(studententity.getFirstName());
        thestudententity.setLastName(studententity.getLastName());
        thestudententity.setMobileNumber(studententity.getMobileNumber());
        thestudententity.setPassword(studententity.getPassword());
        thestudententity.setParentEmailId(studententity.getParentEmailId());
        thestudententity.setMotherName(studententity.getMotherName());
       return studententityrepository.save(thestudententity);
    }


    @Override
    public List<StudentEntity> getallstudent() {
        return studententityrepository.findAll();
    }

    @Override
    public void deleteStudentEntity(Long id) {
           studententityrepository.deleteById(id);
    }
}
