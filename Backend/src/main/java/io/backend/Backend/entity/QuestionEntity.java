package io.backend.Backend.entity;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="question")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "questionId")
public class QuestionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(name = "QUESTION", nullable = false, length = 1000)
    private String question;

    @Column(name = "OPTIONS", nullable = false)
    private List<String> options;

    @Column(name="CreateBy", nullable = false)
    private String author;

    @Column(name = "ANSWER", nullable = false)
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String answer;

    @Column(name = "MARKS", nullable = false)
    private Integer marks;

    @ManyToMany(mappedBy = "questions")
    @JsonIgnore
    private List<ExamEntity> exams;

    @JsonProperty("exams")
    public List<Long> getExamIds() {
        return exams != null ? exams.stream().map(ExamEntity::getExamId).collect(Collectors.toList()) : null;
    }
}
