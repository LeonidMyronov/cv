import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.css']
})
export class ProfSkillsComponent implements OnInit {
  constructor() { }
  public skills;
  public section;

  ngOnInit() {
    this.section = {
          name: 'Professional Skills',
          img: 'assets/img/section_profskills.png'
      }
    this.skills = [
      
      {
        name: 'EcmaScript(ES6)',
        value: '85%'
      },
      {
        name: 'TypeScript',
        value: '65%'
      },
      {
        name: 'Angular',
        value: '80%'
      },
      {
        name: 'HTML5',
        value: '90%'
      },
      {
        name: 'CSS3/Sass/Scss',
        value: '95%'
      },
      {
        name: 'SQL',
        value: '75%'
      },
      {
        name: 'PHP',
        value: '65%'
      },
      {
        name: 'Python',
        value: '45%'
      },
      {
        name: 'C/C++/C#',
        value: '65%'
      },
      {
        name: 'QA',
        value: '50%'
      }
    ]
  }

}
