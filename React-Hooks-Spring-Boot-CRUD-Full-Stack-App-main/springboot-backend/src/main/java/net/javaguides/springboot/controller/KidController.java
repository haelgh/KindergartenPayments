package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kid;
import net.javaguides.springboot.repository.KidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/kids")
public class KidController {

    @Autowired
    private KidRepository kidRepository;

    @GetMapping
    public List<Kid> getAllKids(){
        return kidRepository.findAll();
    }

    // build create kid REST API
    @PostMapping
    public Kid createKid(@RequestBody Kid kid) {
        return kidRepository.save(kid);
    }

    // build get kid by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Kid> getKidById(@PathVariable  long id){
        Kid kid = kidRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Kid not exist with id:" + id));
        return ResponseEntity.ok(kid);
    }

    // build update kid REST API
    @PutMapping("{id}")
    public ResponseEntity<Kid> updateKid(@PathVariable long id,@RequestBody Kid kidDetails) {
        Kid updateKid = kidRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Kid not exist with id: " + id));

        updateKid.setFullName(kidDetails.getFullName());
        updateKid.setAccount(kidDetails.getAccount());
        updateKid.setBill(kidDetails.getBill());
        updateKid.setKindergarten(kidDetails.getKindergarten());

        kidRepository.save(updateKid);

        return ResponseEntity.ok(updateKid);
    }

    // build delete kid REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteKid(@PathVariable long id){

        Kid kid = kidRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Kid not exist with id: " + id));

        kidRepository.delete(kid);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
