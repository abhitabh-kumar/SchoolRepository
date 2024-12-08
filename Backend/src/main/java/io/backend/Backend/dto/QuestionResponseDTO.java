package io.backend.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDTO {


    private Long userId;

    private Long examId;

    private List<StudentResponseDTO> questionEntityDto;

}
