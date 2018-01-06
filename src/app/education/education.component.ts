import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educations;
  public section;
  constructor() { }
  ngOnInit() {
    this.section = {
          name: 'Education',
          img: 'assets/img/section_education.png'
      };
    this.educations = [
      {
        periods: {
          end: new Date('01 jun 2017'),
        },
        title: 'Udemy',
        content: 'Angular 5. Full Stack Web Development',
        imgPath: 'https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg'
      },
      {
        periods: {
          end: new Date('01 jun 2016'),
        },
        title: 'HTML Academy',
        content: 'Base and Advanced course',
        imgPath: 'assets/img/univer_html_academy.png'
      },
      {
        periods: {
          end: new Date('31 dec 2016'),
        },
        title: 'The Hong Kong University of Science and Technology',
        content: 'Full Stack Web Development Specialization',
        imgPath: 'assets/img/univer_logo_HK.png'
      },

      {
        periods: {
          end: new Date('31 dec 2016'),
        },
        title: 'University of Alberta',
        content: 'The Software Product Management Specialization',
        imgPath: 'assets/img/univer_logo_alberta.png'
      },
       {
        periods: {
          end: new Date('31 dec 2015'),
        },
        title: 'University of London',
        content: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript',
        imgPath: 'assets/img/univer_logo_london.png'
      },
       {
        periods: {
          end: new Date('31 dec 2015'),
        },
        title: 'Rice University',
        content: 'Interactive Programming in Python',
        imgPath: 'assets/img/univer_logo_rice.png'
      },
       {
        periods: {
          end: new Date('31 dec 2015'),
        },
        title: 'University of Michigan',
        content: 'Programming for Everybody (Python)',
        imgPath: 'assets/img/univer_logo_michigan.png'
      },
       {
        periods: {
          end: new Date('31 dec 2015'),
        },
        title: 'CISCO Academy',
        content: 'CCNA Routing & Switching',
        imgPath: 'assets/img/univer_logo_cisco.png'
      },
       {
        periods: {
          end: new Date('31 dec 2014'),
        },
        title: 'CA Step',
        content: 'Software Developing Course',
        imgPath: ''
      }
      ]
  }

}
