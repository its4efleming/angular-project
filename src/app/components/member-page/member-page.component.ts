import { Component } from '@angular/core';
import { Content, DataService } from '../../services/data.service';
import { UNRClassComponent } from '../unrclass/unrclass.component';
import { unrClass } from '../../models/unr-class.model';
import { FilterBarComponent } from '../filter-bar/filter-bar.component'

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [UNRClassComponent, FilterBarComponent],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.css'
})
export class MemberPageComponent {
  data: Content | undefined;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getDataStream.subscribe(data => {
      this.data = data;
    });
    this.dataService.loadData();
  } 

  public get classes() {
    return this.data?.classes ?? [];
  }
/*  checkIfScrolledPastThreshold(): boolean {
    const threshold = 100; // Adjust this value as needed (distance from top in pixels)
    const scrollPosition = window.scrollY;
    return scrollPosition > threshold;
  }*/
}
