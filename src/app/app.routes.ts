import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';

// 今のバージョンはここへ追加すればOKなのか？
export const routes: Routes = [
  { path: 'members', component: MembersComponent },
];
