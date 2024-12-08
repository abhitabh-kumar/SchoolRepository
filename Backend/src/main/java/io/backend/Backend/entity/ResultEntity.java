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
    @JsonIgnore
    private StudentEntity student;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    @JsonIgnore
    private ExamEntity exam;

    private int obtainedMarks;
}
