import { Injectable } from '@angular/core';
import { GreetingInstance } from './greeting-instance';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  greetingInstanceList: GreetingInstance[] = [
    {
      id: 1,
      content: "Hello OSS",
    },
    {
      id: 2,
      content: "Greeting sir",
    },
    {
      id: 3,
      content: "Hello wurld",
    },
    {
      id: 4,
      content: "Bonjour",
    },
    {
      id: 4,
      content: "allo warld",
    },
  ];

  constructor() { }

  getAllGreetingInstances(): GreetingInstance[] {
    return this.greetingInstanceList;
  }
  
  getGreetingInstanceById(id: number): GreetingInstance | undefined {
    return this.greetingInstanceList.find((greetingInstance) => greetingInstance.id == id);
  }
}
