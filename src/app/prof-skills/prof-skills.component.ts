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
        name: 'JavaScript',
        value: '85%'
      },
      {
        name: 'TypeScript',
        value: '80%'
      },
      {
        name: 'Angular',
        value: '90%'
      },
      {
        name: 'HTML5',
        value: '90%'
      },
      {
        name: 'CSS3',
        value: '95%'
      },
      {
        name: 'SQL',
        value: '75%'
      },
      {
        name: 'PHP',
        value: '70%'
      },
      {
        name: 'C/C++/C#',
        value: '65%'
      },
      {
        name: 'QA',
        value: '60%'
      }
    ]
  }

}
