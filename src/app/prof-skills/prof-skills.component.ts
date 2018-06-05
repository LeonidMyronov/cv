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
        name: 'Angular 6/5',
        value: '100%'
      },
      {
        name: 'ES6/ES5',
        value: '95%'
      },
      {
        name: 'TypeScript',
        value: '100%'
      },
      {
        name: 'RxJs',
        value: '85%'
      },
      {
        name: 'AngularJS',
        value: '75%'
      },
      {
        name: 'ReactJS',
        value: '60%'
      },
      {
        name: 'HTML5',
        value: '100%'
      },
      {
        name: 'CSS3/Sass/Scss',
        value: '100%'
      },
      {
        name: 'NodeJS',
        value: '50%'
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
    ];
  }

}
