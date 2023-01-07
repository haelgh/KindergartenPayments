package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "kid")
public class Kid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="name_")
    private String fullName;
    @Column(name="bill")
    private Double bill;
    @Column(name="accountNum")
    private Integer account;
    @Column(name="kindergartenNum")
    private Integer kindergarten;
}
