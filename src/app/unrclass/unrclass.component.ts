import { Component } from '@angular/core';
import { MemberComponent } from './member/member.component';

interface unrClass {
  name: string;
  members: MemberComponent<Member>[];
}

@Component({
  selector: 'app-unrclass',
  standalone: true,
  imports: [],
  templateUrl: './unrclass.component.html',
  styleUrl: './unrclass.component.css'
})
export class UNRClassComponent {

}
