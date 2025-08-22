package io.backend.Backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ResultEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resultId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private StudentEntity student;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private ExamEntity exam;

    @Column
    private int obtainedMarks;

    @Column
    private int totalMarks;
}
