import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MembersComponent } from './members/members.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MembersComponent], // 追加のコンポーネントはここへ追加
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '自社社員名簿';
}
