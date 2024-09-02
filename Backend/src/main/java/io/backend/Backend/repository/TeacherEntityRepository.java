package io.backend.Backend.repository;


import io.backend.Backend.model.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherEntityRepository extends JpaRepository<TeacherEntity, Long> {

//    @Query("SELECT * FROM TeacherEntity T WHERE T.email=:email")
//    TeacherEntity findAllByEmail(@Param("email") String email);

    @Query(value = "SELECT * FROM TeacherEntity WHERE email = :email", nativeQuery = true)
    TeacherEntity findAllByEmailNative(@Param("email") String email);

//    TeacherEntity findByEmail(String email);
}
