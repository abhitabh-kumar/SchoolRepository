package io.backend.Backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name="USER")
public class UserInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Lob
    @Column(name = "profile_pic", columnDefinition = "LONGBLOB")
    private byte[] profilePic;

    @Column(name = "USER_NAME",unique = true,nullable = false)
    private String userName;

    @Column(nullable = true, name = "PASSWORD")
    private String password;

    @Column(nullable = true, name = "EMAIL_ID")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&amp;'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",message = "Invalid email format")
    private String emailId;

    @Column(nullable = false, name = "ROLES")
    private String roles;

}

