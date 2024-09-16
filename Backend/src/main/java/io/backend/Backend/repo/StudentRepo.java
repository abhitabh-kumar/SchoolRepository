package io.backend.Backend.repo;

import io.backend.Backend.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity,Long> {
    List<StudentEntity> findByEmailId(String emailId);
    Optional<StudentEntity> findByRollNo(String rollNo);
    List<StudentEntity> findAll();

   StudentEntity findByUserId(Long id);
}
