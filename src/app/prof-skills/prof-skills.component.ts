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
        name: 'Angular',
        value: '95%'
      },
      {
        name: 'ES7/ES6',
        value: '95%'
      },
      {
        name: 'TypeScript',
        value: '100%'
      },
      {
        name: 'RxJs',
        value: '90%'
      },
      {
        name: 'NGXS | NGRX',
        value: '100%'
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
        name: 'Kendo UI',
        value: '100%'
      },
      {
        name: 'Angular Material',
        value: '100%'
      },
      {
        name: 'NodeJS',
        value: '60%'
      },
      {
        name: 'MondoDB',
        value: '50%'
      },
      {
        name: 'AWS',
        value: '55%'
      },
    ];
  }

}
