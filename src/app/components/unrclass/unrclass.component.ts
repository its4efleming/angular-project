import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MemberComponent } from '../member/member.component';
import { unrClass } from '../../models/unr-class.model';

@Component({
  selector: 'app-unrclass',
  standalone: true,
  imports: [MemberComponent],
  templateUrl: './unrclass.component.html',
  styleUrl: './unrclass.component.css'
})
export class UNRClassComponent {/*
  name: string;
  constructor{ private dataService: DataService }*/
}
