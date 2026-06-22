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

  constructor() {
    this.saveLastVisit();

    this.saveAmountVisit();
  }

  companyName: string = 'РУМТИБЕТ'


  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [
      Color.RED,
      Color.GREEN,
      Color.BLUE
    ];
    return primaryColors.includes(color);
  }

  saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toString());
  }

  saveAmountVisit(): void {
    const visits = localStorage.getItem('amountVisit');
    const count: number = visits !== null ? Number(visits) : 0;
    localStorage.setItem('amountVisit', String(count + 1));
  } 
}
