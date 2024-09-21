package io.backend.Backend.repo;

import io.backend.Backend.entity.ExamEntity;
import io.backend.Backend.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExamRepo extends JpaRepository<ExamEntity,Long> {
}
