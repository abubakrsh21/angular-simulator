import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { Message } from '../enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: IMessage[] = [];

  private addMessage(message: IMessage): void {
    const newMessage: IMessage = {
      ...message,
      id: Date.now()
    };

    this.messages.unshift(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id!);
    }, 5000);
  }

  showWarn(text: string): void {
    this.addMessage({
      text,
      type: Message.WARN
    });
  }

  showError(text: string): void {
    this.addMessage({
      text,
      type: Message.ERROR
    });
  }

  showSuccess(text: string): void {
    this.addMessage({
      text,
      type: Message.SUCCESS
    });
  }

  showInfo(text: string): void {
    this.addMessage({
      text,
      type: Message.INFO
    });
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}