package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KidRepository extends JpaRepository<Kid, Long> {
    // all crud database methods
}


