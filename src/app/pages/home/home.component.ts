import { Component } from '@angular/core';
import { IPopularDestination } from '../../../interfaces/IPopularDestination';
import { ITravelBlog } from '../../../interfaces/ITravelBlog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { inject } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { IService } from '../../../interfaces/IService';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, NgTemplateOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly messageService = inject(MessageService);
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  liveInputValue: string = '';
  

  participantsOptions: string[] = [
    '1 человек',
    '2 человека',
    '3 и более'
  ];

  locations: string[] = ['Крым', 'Алтай', 'Сочи', 'Кавказ'];

  get isSearchDisabled(): boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedParticipants;
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
