package io.backend.Backend.repo;

import io.backend.Backend.entity.SubscriberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriberRepo extends JpaRepository<SubscriberEntity,Long> {
}
