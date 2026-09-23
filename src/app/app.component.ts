import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { training } from './training';
import { Color } from '../enums/Color';
import { MessageService } from '../services/message.service';
import { LocalStorageService } from '../services/local-storage.service';
import { IMessage } from '../interfaces/IMessage';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, NgTemplateOutlet, CommonModule, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  isLoading: boolean = true;

  constructor(
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {
    this.saveLastVisit();
    this.saveAmountVisit();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

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
    const visits: number | null =
      this.localStorageService.getItem<number>('amountVisit');

    const count: number = visits ?? 0;

    this.localStorageService.setItem<number>(
      'amountVisit',
      count + 1
    );
  }

  get messages(): IMessage[] {
    return this.messageService.messages;
  }

  closeMessage(id: number): void {
    this.messageService.closeMessage(id);
  }
}