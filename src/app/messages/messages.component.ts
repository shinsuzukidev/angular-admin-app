import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent implements OnInit {
  // public messageServiceとしている理由はHTML側から見れるようにするため
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
