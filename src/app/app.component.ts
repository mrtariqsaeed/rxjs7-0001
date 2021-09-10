import { Component } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todosURL = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor(private http: HttpClient) {
    this.getTodos()
  }

  async getTodos() {
    // const data$ = this.http.get(this.todosURL)
    const data$ = new Observable(subscriber => {
      subscriber.next('Todo 1')
      subscriber.complete()
    })
    
    try {
      const value = await lastValueFrom(data$, {defaultValue: 'Default'}) ?? 'Default 2'
      console.log('value ->', value)
    } catch(e) {
      console.log(e)
    }
    
  }
}
