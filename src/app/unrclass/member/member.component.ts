import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

interface Member {
  name: string | undefined;
  major: string | undefined;
  position: string | undefined;
  email: string | undefined;
  resume: string | undefined;
  image: string | undefined;
  linkedin: string | undefined;
}

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  colors: Member[] = [
    {
      name: "Emerson Fleming",
      major: "Computer Science",
      position: "Tech Chair",
      email: "efleming@nevada.unr.edu",
      resume: "youtube.com",
      image: "https://emerson-fleming.github.io/Images/emerson_fleming.jpeg",
      linkedin: "https://www.linkedin.com/in/emersonfleming/"
    },
  ];
  classData: unrClass[]= [
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
      ],
    },
  ];
/*  constructor(private service: DataService) { }
  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.memberData = Object.keys(data);
      console.log(this.memberData)
    })
  }*/
}
