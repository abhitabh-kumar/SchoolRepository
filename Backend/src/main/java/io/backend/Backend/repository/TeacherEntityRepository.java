package io.backend.Backend.repository;


import io.backend.Backend.model.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherEntityRepository extends JpaRepository<TeacherEntity, Long> {
}
