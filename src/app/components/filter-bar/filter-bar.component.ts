import { Component } from '@angular/core';
import { Content, DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  data: Content | undefined;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getDataStream.subscribe(data => {
      this.data = data;
    });
    this.dataService.loadData();
  }

  public get classes() {
    return this.data?.classes ?? [];
  }

}
