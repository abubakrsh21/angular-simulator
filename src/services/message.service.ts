import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: IMessage[] = [];

  addMessage(message: IMessage): void {
    const newMessage: IMessage = {
      ...message,
      id: Date.now()
    };

    this.messages.unshift(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id!);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}