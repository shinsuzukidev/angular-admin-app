import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { SampleComponent } from './sample/sample.component';
import { TopComponent } from './top/top.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// 今のバージョンはここへ追加すればOKなのか？
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: 'sample', component: SampleComponent },
];
