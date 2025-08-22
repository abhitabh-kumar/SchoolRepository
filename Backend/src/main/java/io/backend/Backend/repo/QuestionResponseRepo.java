package io.backend.Backend.repo;

import io.backend.Backend.entity.QuestionResponseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionResponseRepo extends JpaRepository<QuestionResponseEntity,Long> {

    List<QuestionResponseEntity> findByResult_ResultId(Long resultId);
}
