import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UNRClassComponent } from '../unrclass/unrclass.component';
import { unrClass } from '../../models/unr-class.model';

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [UNRClassComponent],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.css'
})
export class MemberPageComponent {
  data: any;
;
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData;
    console.log(this.data)
  }
  //data: any = this.dataService.dataOut();
  //classData: unrClass[] = this.dataService.classes;
}
