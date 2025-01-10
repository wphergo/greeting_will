import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingInstanceComponent } from '../greeting-instance/greeting-instance.component';
import { GreetingInstance } from '../greeting-instance';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GreetingInstanceComponent],
  template:`
    <section>
      <form>
        <input type="text" placeholder="Filter by message" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-greeting-instance
      *ngFor="let greetingInstance of greetingInstanceList"
       [greetingInstance]="greetingInstance"></app-greeting-instance>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  greetingInstanceList: GreetingInstance[] = [];
  greetingService: GreetingService = inject(GreetingService);

  constructor() {
    this.greetingInstanceList = this.greetingService.getAllGreetingInstances();
  }


}
