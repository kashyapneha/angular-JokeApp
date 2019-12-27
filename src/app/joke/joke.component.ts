import {Component, Input, EventEmitter, Output } from '@angular/core';
import { Joke } from './joke-list/joke-list.component';

@Component({
  selector: 'app-joke',
  templateUrl : '../joke/joke.component.html'
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.joke);
  }
}