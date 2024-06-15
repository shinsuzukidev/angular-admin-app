import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { MemberService } from '../member.service';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    // 追加忘れないで
    FormsModule,
    CommonModule,
    MemberDetailComponent,
    MessagesComponent,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  selectedMember: Member = { id: 0, name: '' };

  /*
   * 関数定義
   */
  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) {
    // サービスを使用するためDIを使用
  }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member) {
    this.messageService.add(`select id=${member.id}:${member.name}`);
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService
      .getMembers() // Observableのsubscribeを利用
      .subscribe((members) => (this.members = members));
  }
}
