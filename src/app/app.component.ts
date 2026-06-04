import { Component } from '@angular/core';
import { training } from './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {
    console.log(training);
  }


}
