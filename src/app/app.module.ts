import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    JokeComponent, 
    JokeListComponent,
    JokeFormComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
