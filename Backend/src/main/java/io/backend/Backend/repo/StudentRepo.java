package io.backend.Backend.repo;

import io.backend.Backend.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity,Long> {
    Optional<StudentEntity> findByEmailId(String emailId);
}
