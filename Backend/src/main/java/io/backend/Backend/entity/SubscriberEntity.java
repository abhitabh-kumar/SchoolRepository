package io.backend.Backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Subscriber")
public class SubscriberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "USER_NAME",unique = true,nullable = false)
    private String userName;

    @Column(name = "Email", unique = true, nullable = false)
    private String email;

    @Column(name = "type",unique = true,nullable = false)
    private String type;
}
