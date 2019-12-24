import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke-list/joke-list.component';

@Component({
  selector: 'app-joke-form',
  template : `
  <div class="card card-body">
    <h5 class="card-title">Create Joke</h5>
    <div class="form-group">
      <input type="text"
             class="form-control"
             placeholder="Enter the setup"
             #setup>
    </div>
    <div class="form-group">
      <input type="text"
             class="form-control"
             placeholder="Enter the punchline"
             #punchline>
    </div>
    <button type="button"
            class="btn btn-primary"
            (click)="createJoke(setup.value, punchline.value)">Create</button>
  </div>
  `
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter <Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}