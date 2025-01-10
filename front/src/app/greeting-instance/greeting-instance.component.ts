import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingInstance } from '../greeting-instance';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greeting-instance',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <h2 class="listing-id">ID: {{ greetingInstance.id}}</h2>
      <p class="listing-content">Content: {{ greetingInstance.content }}</p>
      <a [routerLink]="['/details', greetingInstance.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./greeting-instance.component.css'],
})
export class GreetingInstanceComponent {

  @Input() greetingInstance!: GreetingInstance;

}
