package io.backend.Backend.repo;

import io.backend.Backend.entity.ExamEntity;
import io.backend.Backend.entity.QuestionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ExamRepo extends JpaRepository<ExamEntity,Long> {

    ExamEntity getByExamId(Long id);

    @Query("SELECT q FROM QuestionEntity q JOIN q.exams e WHERE e.examId = :examId")
    Page<QuestionEntity> findQuestionsByExamId(Long examId, Pageable pageable);
}
