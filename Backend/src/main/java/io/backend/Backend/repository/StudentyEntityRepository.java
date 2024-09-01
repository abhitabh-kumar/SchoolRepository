package io.backend.Backend.repository;


import io.backend.Backend.model.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentyEntityRepository extends JpaRepository<StudentEntity, Long> {
}
