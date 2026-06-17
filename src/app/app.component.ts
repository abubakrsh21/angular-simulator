import { Component } from '@angular/core';
import { training } from './training';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'РУМТИБЕТ'


  isPrimaryColor(color: Color): boolean {
    return (
      color === Color.RED ||
      color === Color.GREEN ||
      color === Color.BLUE
    );
  }

  saveLastVisit(): void {
    localStorage.setItem(
      'lastVisit',
      new Date().toString()
    );
  }

  saveAmountVisit(): void {
    const visits = localStorage.getItem('amountVisit');

    const count = visits ? Number(visits) : 0;

    localStorage.setItem(
      'amountVisit',
      String(count + 1)
    );
  }

  constructor() {
    this.saveLastVisit();

    this.saveAmountVisit();
  }
}
