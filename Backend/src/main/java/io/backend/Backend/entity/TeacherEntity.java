package io.backend.Backend.entity;

import io.backend.Backend.dto.Qualification;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Teacher")
public class TeacherEntity extends UserInfoEntity{

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(nullable = false, name = "EMAIL_ID")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&amp;'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",message = "Invalid email format")
    private String emailId;

    @Enumerated(EnumType.STRING)
    private Qualification qualification;

    @Column(name = "MOBILE_NUMBER", nullable = false)
    private String mobileNumber;

    @Column(name = "AGE", nullable = false)
    private Integer age;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private AddressEntity address;

}
