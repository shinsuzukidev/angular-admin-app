import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // 追加 ngIf,ngModelのため
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMember();
  }

  getMember(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id > ' + id);

    this.memberService
      .getMember(id)
      .subscribe((member) => (this.member = member));
  }
}
