import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-experience',
  templateUrl: './prof-experience.component.html',
  styleUrls: ['./prof-experience.component.css']
})
export class ProfExperienceComponent implements OnInit {
  public section;
  public profExp;
  constructor() { }

  ngOnInit() {
    this.section = {
        name: 'Professional Experience',
        img: 'assets/img/section_profexperiencepng.png'
    }
    this.profExp = [
      {
        periods: {
          start: new Date('01 aug 2016'),
          end: new Date()
        },
        title: 'Envion Software',
        content: 'Front-end Developer',
        imgPath: 'assets/img/company_envion.png'
      },
      {
        periods: {
          start: new Date('01 sep 2015'),
          end: new Date('01 aug 2016')
        },
        title: 'Freelance',
        content: 'Web Developer',
        imgPath: 'assets/img/company_freelancer.png'
      },
      {
        periods: {
          start: new Date('01 apr 2007'),
          end: new Date('01 aug 2016')
        },
        title: 'S-engineering LLC',
        content: 'Head of IT Department',
        imgPath: 'assets/img/exp_logo_SEngineering.jpg'
      }
    ]

    
  }

}
