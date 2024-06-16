import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    // 追加忘れないで
    FormsModule,
    CommonModule,
    MemberDetailComponent,
    RouterLink,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  /*
   * 関数定義
   */
  constructor(private memberService: MemberService) {
    // サービスを使用するためDIを使用
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService
      .getMembers() // Observableのsubscribeを利用
      .subscribe((members) => (this.members = members));
  }
}
