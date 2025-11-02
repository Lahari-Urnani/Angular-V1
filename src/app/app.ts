import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CRUD } from './crud/crud';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CRUD],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lahari-AngularApp');
 
  Change()
  {
      this.title.set("Angular Course");
  }
}
