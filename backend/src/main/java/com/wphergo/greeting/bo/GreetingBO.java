package com.wphergo.greeting.bo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wphergo.greeting.model.Greeting;
import com.wphergo.greeting.repo.GreetingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GreetingBO {

    private final GreetingRepository greetingRepository;

    public Greeting getGreetingByID(long id) {
        return greetingRepository.findById(id).orElse(null);
    }

    public Iterable<Greeting> getAllGreeting() {
        return greetingRepository.findAll();
    }

    public Greeting createGreeting(String content) {
        Greeting greeting = new Greeting();
        greeting.setContent(content);
        return greetingRepository.save(greeting);
    }
}
