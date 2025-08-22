package io.backend.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentResponseDTO {

    private Long questionId;

    private String response;

}
