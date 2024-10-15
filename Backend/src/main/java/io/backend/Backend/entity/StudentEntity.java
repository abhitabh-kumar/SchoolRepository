package io.backend.Backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="STUDENT")
public class StudentEntity extends UserInfoEntity{

    @Column(name = "ROll_NO", nullable = false,unique = true)
    private String rollNo;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(nullable = false, name = "EMAIL_ID")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&amp;'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",message = "Invalid email format")
    private String emailId;

    @Column(name = "FATHER_NAME", nullable = false)
    private String fatherName;

    @Column(name = "MOTHER_NAME")
    private String motherName;

    @Column(name = "GRADE", nullable = false)
    private Integer grade;

    @Column(name = "MOBILE_NUMBER", nullable = false)
    private String mobileNumber;

    @Column(name = "AGE", nullable = false)
    private Integer age;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private AddressEntity address;

    private Date dateOfBirth;

    private Date dateOfJoining;
}

