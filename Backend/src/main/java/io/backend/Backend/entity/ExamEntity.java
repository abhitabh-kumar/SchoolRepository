package io.backend.Backend.entity;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="exam")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "examId")
public class ExamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examId;

    @Column(name="SUBJECT", nullable = false)
    private String subject;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name = "exam_questions", joinColumns = @JoinColumn(name="exam_id"),
            inverseJoinColumns = @JoinColumn(name="question_id"))
    private List<QuestionEntity> questions;
}
