import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.css']
})
export class ProfSkillsComponent implements OnInit {
  constructor() { }
  private skills;
  private section;

  ngOnInit() {
    this.section = {
          name: 'Professional Skills',
          img: 'assets/img/section_profskills.png'
      }
    this.skills = [
      {
        name: 'HTML',
        value: '90%'
      },
      {
        name: 'CSS',
        value: '50%'
      },
      {
        name: 'JS',
        value: '80%'
      }
    ]
  }

}
