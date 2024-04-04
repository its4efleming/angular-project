import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UNRClassComponent } from '../unrclass/unrclass.component';
import { unrClass } from '../../models/unr-class.model';

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.css'
})
export class MemberPageComponent {
  constructor(private dataService: DataService) { }
  allData: any[] = this.dataService.loadData();

}
