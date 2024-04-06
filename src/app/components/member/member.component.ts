import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Member } from '../../models/member.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() className: string | undefined;
  member: Member | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    if (this.name && this.className) {
      this.member = this.dataService.getMemberData(this.name, this.className);
    }
  }
}
