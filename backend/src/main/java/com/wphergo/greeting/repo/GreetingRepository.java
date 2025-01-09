package com.wphergo.greeting.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wphergo.greeting.model.Greeting;

@Repository
public interface GreetingRepository extends CrudRepository<Greeting, Long> {

}
