package com.wphergo.greeting;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.wphergo.greeting.model.Greeting;
import com.wphergo.greeting.repo.GreetingRepository;

@SpringBootTest
class GreetingApplicationTests {

	@Autowired
	private GreetingRepository greetingRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void getGreetingByIdTest() {
		Greeting greeting = new Greeting();
		greeting.setContent("test");
		Greeting savedGreeting = greetingRepository.save(greeting);

		Greeting fetchedGreeting = greetingRepository.findById(savedGreeting.getId()).orElse(null);

		assertEquals(savedGreeting.getContent(), fetchedGreeting.getContent());
	}

	@Test
	public void createGreetingTest() {
		Greeting greeting = new Greeting();
		greeting.setContent("test");
		Greeting savedGreeting = greetingRepository.save(greeting);

		assertEquals(savedGreeting.getContent(), greeting.getContent());
	}

}
