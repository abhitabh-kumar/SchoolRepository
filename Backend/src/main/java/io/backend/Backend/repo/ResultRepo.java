package io.backend.Backend.repo;

import io.backend.Backend.entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ResultRepo extends JpaRepository<ResultEntity,Long> {

    List<ResultEntity> findByExam_ExamId(Long examId);

    List<ResultEntity> findByExam_Author(String author);

    List<ResultEntity> findByStudent_UserName(String userName);

}
