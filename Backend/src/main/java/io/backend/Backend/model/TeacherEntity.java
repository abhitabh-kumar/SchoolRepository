package io.backend.Backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class TeacherEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teacherId;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private String age;
    private String mobile_number;
    private String address;
    private Date dateofBirth;
    private String qualification;
    private String discription;
}
