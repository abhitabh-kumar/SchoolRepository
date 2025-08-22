package io.backend.Backend.entity;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="exam")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "examId")
public class ExamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examId;

    @Column(nullable = false)
    private String examName;

    @Column(name="SUBJECT", nullable = false)
    private String subject;

    @Column(name="Grade", nullable = false)
    private String grade;

    @Column(name="CreateBy", nullable = false)
    private String author;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(cascade = CascadeType.MERGE,fetch = FetchType.EAGER)
    @JoinTable(name = "exam_questions", joinColumns = @JoinColumn(name="exam_id"),
            inverseJoinColumns = @JoinColumn(name="question_id"))
    private List<QuestionEntity> questions;
}
