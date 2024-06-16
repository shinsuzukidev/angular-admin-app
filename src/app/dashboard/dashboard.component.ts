import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService
      .getMembers()
      .subscribe((m) => (this.members = m.slice(1, 5)));
  }
}
