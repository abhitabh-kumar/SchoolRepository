package io.backend.Backend.repo;

import io.backend.Backend.entity.QuestionEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface QuestionRepo extends JpaRepository<QuestionEntity,Long> {

    List<QuestionEntity> findByExams_Subject(String subject);

    List<QuestionEntity> findByExams_GradeAndExams_Subject(String grade, String subject, Pageable pageable);


//    @Query("SELECT q FROM QuestionEntity q JOIN q.exams e WHERE e.subject = :subject AND e.grade = :grade")
//    List<QuestionEntity> findBySubjectAndGrade(@Param("subject") String subject, @Param("grade") String grade);


}
