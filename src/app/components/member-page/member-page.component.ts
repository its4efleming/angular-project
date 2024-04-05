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
  classData: any;
;
  constructor(private dataService: DataService) {}

  ngOnInit() {//flag isLoading; isloading = true -> false
    this.data = this.dataService.getData;
    console.log(this.data)
    this.classData = this.dataService.getClasses;
    console.log(this.classData)
  }
  //data: any = this.dataService.dataOut();
  //classData: unrClass[] = this.dataService.classes;
}
