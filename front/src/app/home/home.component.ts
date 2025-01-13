import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingInstanceComponent } from '../greeting-instance/greeting-instance.component';
import { GreetingInstance } from '../greeting-instance';
import { GreetingService } from '../greeting.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, GreetingInstanceComponent, RouterModule],
  template:`
    <section>
    <a [routerLink]="['/creation']">Create a greeting</a>
    </section>
    <section>
      <form>
        <input type="text" placeholder="Filter by greeting content" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-greeting-instance
      *ngFor="let greetingInstance of filteredGreetingList"
       [greetingInstance]="greetingInstance"></app-greeting-instance>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  greetingInstanceList: GreetingInstance[] = [];
  greetingService: GreetingService = inject(GreetingService);
  filteredGreetingList: GreetingInstance[] = [];

  constructor() {

    this.greetingService.getAllGreetingInstances().then((greetingInstanceList: GreetingInstance[]) => {
      this.greetingInstanceList = greetingInstanceList;
      this.filteredGreetingList = greetingInstanceList;
    });
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredGreetingList = this.greetingInstanceList;
      return;
    }

    this.filteredGreetingList = this.greetingInstanceList.filter((greetingInstance) =>
      greetingInstance?.content.toLowerCase().includes(text.toLowerCase()),
  );
  }

}
