import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage = '';
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  isChatOpen = false;

  constructor(private chatbotService: ChatbotService) {}

  toggleChatbot(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  getSenderName(sender: 'user' | 'bot'): string {
    return sender === 'bot' ? 'Smartdocs bot' : 'You';
  }

  sendMessage(): void {
    const trimmed = this.userMessage.trim();
    if (!trimmed) return;

    this.messages.push({ sender: 'user', text: trimmed });

    this.chatbotService.sendMessage(trimmed).subscribe({
      next: (res) => {
        this.messages.push({ sender: 'bot', text: res.reply });
      },
      error: (err) => {
        this.messages.push({
          sender: 'bot',
          text: 'Error: ' + (err.error?.reply || 'Something went wrong.'),
        });
      }
    });

    this.userMessage = '';
  }

  formatMessage(message: string): string {
  const lines = message.trim().split('\n');
  let html = '';
  let inTable = false;
  let isHeader = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').slice(1, -1).map(cell => cell.trim());

      if (!inTable) {
        html += '<table class="table table-sm table-bordered chatbot-table style="color:#035968"><thead>';
        inTable = true;
      }

      html += '<tr>';
      for (const cell of cells) {
        html += isHeader
          ? `<th>${cell}</th>`
          : `<td>${cell}</td>`;
      }
      html += '</tr>';
      isHeader = false;
    } else {
      // Detect title lines before a table and style them
      if (
        i + 2 < lines.length &&
        lines[i + 1].startsWith('|') &&
        lines[i + 2].startsWith('|')
      ) {
        html += `<h6 class="table-title">${line}</h6>`;
        continue;
      }

      if (inTable) {
        html += '</tbody></table>';
        inTable = false;
        isHeader = true;
      }

      html += `<p>${line}</p>`;
    }
  }

  if (inTable) html += '</tbody></table>';
  return html;
}
}
