package net.javaguides.springboot;

import net.javaguides.springboot.model.Kid;
import net.javaguides.springboot.repository.KidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private KidRepository kidRepository;

	@Override
	public void run(String... args) throws Exception {
//		Kid kid = new Kid();
//		kid.setFullName("Jane Smith");
//		kid.setAccount(1236);
//		kid.setBill(541.8);
//		kid.setKindergarten(4);
//		kidRepository.save(kid);
//
//		Kid kid1 = new Kid();
//		kid1.setFullName("Colin Hoover");
//		kid1.setAccount(5678);
//		kid1.setBill(235.8);
//		kid1.setKindergarten(3);
//		kidRepository.save(kid1);
	}
}
