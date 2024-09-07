package io.backend.Backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private String rollNo;
    private String classname;
    private String motherName;
    private String fatherName;
    private String age;
    private String mobileNumber;
    private String parentEmailId;
    private String bloodGroup;
    private String address;
    private String dateofBirth;
    private String dateOfJoining;
}
