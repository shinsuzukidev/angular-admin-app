import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 追加のコンポーネントはここへ追加(ルーター、使用するコンポーネント)
  imports: [RouterOutlet, RouterModule, MembersComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '自社社員名簿';
}
