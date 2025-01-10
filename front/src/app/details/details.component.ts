import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GreetingService } from '../greeting.service';
import { GreetingInstance } from '../greeting-instance';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <section>
        <h2 class="listing-heading">{{ greetingInstance?.id}}</h2>
        <p>{{greetingInstance?.content}}</p>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  greetingService = inject(GreetingService);
  greetingInstance: GreetingInstance | undefined;
  greetingInstanceId = -1;
  constructor() {
    const greetingInstanceId = Number(this.route.snapshot.params['id']);
    this.greetingInstance = this.greetingService.getGreetingInstanceById(greetingInstanceId);
  }
}
