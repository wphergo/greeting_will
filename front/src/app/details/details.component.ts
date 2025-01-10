import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GreetingService } from '../greeting.service';
import { GreetingInstance } from '../greeting-instance';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <section>
        <h2 class="listing-heading">{{ greetingInstance?.id}}</h2>
        <p>{{greetingInstance?.content}}</p>
      </section>
      <section>
      <h2 class="section-heading">Apply for something</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />

          <button type="submit" class="primary">Apply now</button>
        </form>
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

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const greetingInstanceId = Number(this.route.snapshot.params['id']);
    this.greetingService.getGreetingInstanceById(greetingInstanceId).then((greetingInstance) => {
      this.greetingInstance = greetingInstance;
  });
  }

  submitApplication() {
    this.greetingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}