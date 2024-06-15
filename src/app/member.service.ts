import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root', // この指定でapp全体から使用できる
})
export class MemberService {
  constructor(private messageService: MessageService) {}

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧を取得しました。');
    return of(MEMBERS); // of は rxjs により Observableへ変換する、非同期処理
  }
}
