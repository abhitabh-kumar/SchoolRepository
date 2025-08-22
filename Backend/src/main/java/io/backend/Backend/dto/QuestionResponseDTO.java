package io.backend.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDTO {

    private String userName;

    private Long examId;

    private Map<Long,Long> questionEntityDto;

}
