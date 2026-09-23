import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [DatePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyName: string = 'РУМТИБЕТ'
  isClockVisible: boolean = true;
  currentDateTime: Date = new Date();
  clickCount: number = 0;

  navigation: { title: string; link: string }[] = [
    {
      title: 'Главная',
      link: '/'
    },
    {
      title: 'Пользователи',
      link: '/users'
    },
  ];

  toggleHeaderWidget(): void {
    this.isClockVisible = !this.isClockVisible;
  }

  get headerWidgetButtonLabel(): string {
    return this.isClockVisible ? 'Показать счётчик' : 'Показать таймер';
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
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
