import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UNRClassComponent } from '../unrclass/unrclass.component';
import { unrClass } from '../../models/unr-class.model';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  /*
  classData: unrClass[] = [
    {
      name: "Phi",
      members: [
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
      ],
    },
    {
      name: "Pho",
      members: [
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
        {
          name: "Emerson Fleming",
          major: "Computer Science",
          position: "Tech Chair",
          email: "efleming@nevada.unr.edu",
          resume: "youtube.com",
          image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
          linkedin: "https://www.linkedin.com/in/emersonfleming/"
        },
      ],
    },
  ];*/
/*
  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.memberData = Object.keys(data);
      console.log(this.memberData)
    })
  }*/
}
