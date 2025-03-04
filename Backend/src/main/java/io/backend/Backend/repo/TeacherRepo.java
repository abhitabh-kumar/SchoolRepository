package io.backend.Backend.repo;

import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherEntity,Long> {

    Optional<TeacherEntity> findByUserName(String name);

    TeacherEntity findByUserId(Long id);
}
