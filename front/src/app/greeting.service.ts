import { Injectable } from '@angular/core';
import { GreetingInstance } from './greeting-instance';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  url = "http://localhost:3000/greetings";

  // greetingInstanceList: GreetingInstance[] = [
  //   {
  //     id: 1,
  //     content: "Hello OSS",
  //   },
  //   {
  //     id: 2,
  //     content: "Greeting sir",
  //   },
  //   {
  //     id: 3,
  //     content: "Hello wurld",
  //   },
  //   {
  //     id: 4,
  //     content: "Bonjour",
  //   },
  //   {
  //     id: 4,
  //     content: "allo warld",
  //   },
  // ];

  constructor() { }

  async getAllGreetingInstances(): Promise<GreetingInstance[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  
  async getGreetingInstanceById(id: number): Promise<GreetingInstance | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Greeting application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
