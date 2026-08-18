import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { training } from './training';
import { Color } from '../enums/Color';
import { IService } from '../interfaces/IService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  currentDateTime: Date = new Date();
  clickCount: number = 0;
  isClockVisible: boolean = true;
  liveInputValue: string = '';
  isLoading: boolean = true;

  locations: string[] = ['Крым', 'Алтай', 'Сочи', 'Кавказ'];

  participantsOptions: string[] = [
    '1 человек',
    '2 человека',
    '3 и более'
  ];

  get isSearchDisabled(): boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedParticipants;
  }

  get headerWidgetButtonLabel(): string {
    return this.isClockVisible ? 'Показать счётчик' : 'Показать таймер';
  }

  toggleHeaderWidget(): void {
    this.isClockVisible = !this.isClockVisible;
  }

  incrementClickCount(): void {
    this.clickCount += 1;
  }

  decrementClickCount(): void {
    if (this.clickCount > 0) {
      this.clickCount -= 1;
    }
  }

  constructor() {
    this.saveLastVisit();
    this.saveAmountVisit();

    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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

  services: IService[] = [
    {
      id: 1,
      img: 'experience-gid-icon.svg',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      img: 'security-icon.svg',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      img: 'price-icon.svg',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
  ]

}