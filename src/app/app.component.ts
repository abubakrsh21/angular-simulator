import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { training } from './training';
import { Color } from '../enums/Color';
import { IService } from '../interfaces/IService';
import { IPopularDestination } from '../interfaces/IPopularDestination';
import { ITravelBlog } from '../interfaces/ITravelBlog';
import { MessageService } from '../services/message.service';
import { Message } from '../enums/Message';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet, CommonModule],
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
  Message = Message;

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

  constructor(
    protected messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {
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
    this.localStorageService.setItem<string>(
      'lastVisit',
      new Date().toString()
    );
  }

  saveAmountVisit(): void {
    const visits =
      this.localStorageService.getItem<number>('amountVisit');

    const count: number = visits ?? 0;

    this.localStorageService.setItem<number>(
      'amountVisit',
      count + 1
    );
  }

  showMessage(type: Message, text: string): void {
    this.messageService.addMessage({
      text: text,
      type: type
    });
  }

  services: IService[] = [
    {
      id: 1,
      img: 'experience-gid-icon',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      img: 'security-icon',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      img: 'price-icon',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
  ]

  popularDestinations: IPopularDestination[] = [
    {
      id: 1,
      img: 'lake',
      title: 'Озеро возле гор',
      description: 'романтическое приключение',
      price: 480,
      rating: 4.9
    },
    {
      id: 2,
      img: 'night-mountain',
      title: 'Ночь в горах',
      description: 'в компании друзей',
      price: 500,
      rating: 4.5
    },
    {
      id: 3,
      img: 'mountains',
      title: 'Растяжка в горах',
      description: 'для тех, кто забоится о себе',
      price: 230,
      rating: 5.0
    }
  ];


  travelBlogs: ITravelBlog[] = [
    {
      id: 1,
      img: 'about-italy',
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: new Date(2023, 3, 1)
    },
    {
      id: 2,
      img: 'open-world',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: new Date(2023, 3, 1)
    },
    {
      id: 3,
      img: 'travel-alone',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: new Date(2023, 3, 1)
    },
    {
      id: 4,
      img: 'about-india',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: new Date(2023, 3, 1)
    },
  ];
}