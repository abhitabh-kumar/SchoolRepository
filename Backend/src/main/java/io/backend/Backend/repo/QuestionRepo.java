package io.backend.Backend.repo;

import io.backend.Backend.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface QuestionRepo extends JpaRepository<QuestionEntity,Long> {

}
