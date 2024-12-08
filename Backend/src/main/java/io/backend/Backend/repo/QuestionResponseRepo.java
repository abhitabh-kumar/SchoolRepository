package io.backend.Backend.repo;

import io.backend.Backend.entity.QuestionResponseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionResponseRepo extends JpaRepository<QuestionResponseEntity,Long> {
}
