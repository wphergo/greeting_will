package com.wphergo.greeting.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wphergo.greeting.bo.GreetingBO;
import com.wphergo.greeting.model.Greeting;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/greeting")
@RequiredArgsConstructor
public class GreetingController {

	private static final String template = "Hello, %s!";

	private final GreetingBO greetingBO;

	@GetMapping("/{id}")
	public Greeting getGreetingById(@PathVariable Long id) {
		return greetingBO.getGreetingByID(id);
	}

	@GetMapping
	public Iterable<Greeting> getAllGreetings() {
		return greetingBO.getAllGreeting();
	}

	@PostMapping
	public Greeting createGreeting(@RequestBody Greeting greeting) {
		return greetingBO.createGreeting(greeting);
	}
}