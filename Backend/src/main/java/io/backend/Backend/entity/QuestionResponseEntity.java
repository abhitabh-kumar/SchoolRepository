package io.backend.Backend.entity;

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
public class QuestionResponseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qrId;

    @ManyToOne
    @JoinColumn(name="result_id")
    private ResultEntity result;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private StudentEntity student;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private ExamEntity exam;

    private String selectedOption;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private QuestionEntity question;
}
