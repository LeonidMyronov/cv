import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.css']
})
export class PersonalSkillsComponent implements OnInit {
  constructor() { }
  public section;
  public skills;
  ngOnInit() {
    this.section = {
          name: 'Personal Skills',
          img: 'assets/img/section_personalskills.png'
    }

    this.skills = [
      {
        name: 'Responsible',
        imgPath: 'assets/img/scale_95.png'
      },
      {
        name: 'Analytical',
        imgPath: 'assets/img/scale_90.png'
      },
      {
        name: 'Self-motivated',
        imgPath: 'assets/img/scale_95.png'
      },
      {
        name: 'Reasonable',
        imgPath: 'assets/img/scale_90.png'
      }
    ]

  }

}
