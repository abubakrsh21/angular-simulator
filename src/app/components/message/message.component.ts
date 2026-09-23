import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  private readonly messageService = inject(MessageService);

  get messages() {
    return this.messageService.messages;
  }

  closeMessage(id: number): void {
    this.messageService.closeMessage(id);
  }
}
