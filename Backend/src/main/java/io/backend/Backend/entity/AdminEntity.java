package io.backend.Backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Admin")
public class AdminEntity extends UserInfoEntity{

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(nullable = false, name = "EMAIL_ID")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&amp;'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",message = "Invalid email format")
    private String emailId;
}
