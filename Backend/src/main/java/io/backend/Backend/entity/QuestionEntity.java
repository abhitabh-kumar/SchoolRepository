package io.backend.Backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Question")
public class QuestionEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(name = "QUESTION", nullable = false, length = 1000)
    private String question;

    @Column(name = "OPTIONS", nullable = false)
    private List<String> options;

    @Column(name = "ANSWER", nullable = false)
    private String answer;

    @Column(name = "MARKS", nullable = false)
    private Integer marks;


}
