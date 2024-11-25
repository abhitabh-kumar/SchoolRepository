package io.backend.Backend.repo;

import io.backend.Backend.entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ResultRepo extends JpaRepository<ResultEntity,Long> {
}
