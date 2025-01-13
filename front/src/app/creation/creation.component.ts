import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GreetingService } from '../greeting.service';
import { GreetingInstance } from '../greeting-instance';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-creation',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <section>
      <h2 class="section-heading">Create new greeting</h2>
        <form [formGroup]="createForm" (submit)="submitCreationForm()">
          <label for="greeting-content">Content</label>
          <input id="greeting-content" type="text" formControlName="greetingContent" />

          <button type="submit" class="primary">Create</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './creation.component.css'
})
export class CreationComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  greetingService = inject(GreetingService);

  createForm = new FormGroup({
    greetingContent: new FormControl(''),
  });

  submitCreationForm() {
    this.greetingService.submitCreationForm(
      this.createForm.value.greetingContent ?? '',
    );

  }

}
