package io.backend.Backend.repo;

import io.backend.Backend.entity.StudentEntity;
import io.backend.Backend.entity.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherEntity,Long> {

    List<TeacherEntity> findByName(String name);
}
