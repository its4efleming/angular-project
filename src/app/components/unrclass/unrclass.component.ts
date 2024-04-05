import { Component, Input, OnInit } from '@angular/core';
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
export class UNRClassComponent implements OnInit {
  @Input() name: string | undefined;
  unrClass: unrClass | undefined;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    if (this.name) {
      this.unrClass = this.dataService.getUNRClassData(this.name);
    }
  }
}
