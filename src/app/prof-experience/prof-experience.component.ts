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
    };
    this.profExp = [
      {
        periods: {
          start: new Date('01 aug 2019'),
          end: new Date()
        },
        title: 'Exadel',
        content: 'Delivery TL / Lead Frontend Developer',
        imgPath: 'assets/img/company_exadel.svg'
      },
      // {
      //   periods: {
      //     start: new Date('01 may 2019'),
      //     end: new Date('01 aug 2019')
      //   },
      //   title: 'AMERIA AG',
      //   content: 'Senior Frontend Web Developer',
      //   imgPath: 'assets/img/company_ameria.png'
      // },
      {
        periods: {
          start: new Date('01 jul 2018'),
          end: new Date('30 aug 2019')
        },
        title: 'Restaurant Magic Software',
        content: 'Senior Frontend Web Developer',
        imgPath: 'assets/img/company_rm.png'
      },
      {
        periods: {
          start: new Date('03 jun 2017'),
          end: new Date('05 nov 2018')
        },
        title: 'Unisoft',
        content: 'PM / Lead Project Developer',
        imgPath: 'assets/img/company_unisoft.png'
      },
      // {
      //   periods: {
      //     start: new Date('20 aug 2017'),
      //     end: new Date('25 aug 2018')
      //   },
      //   title: 'Plastic Jam',
      //   content: 'Middle Front-end Developer',
      //   imgPath: 'assets/img/company_pj.png'
      // },
      {
        periods: {
          start: new Date('01 oct 2015'),
          end: new Date('10 nov 2017')
        },
        title: 'Envion Software',
        content: 'Senior Frontend Developer',
        imgPath: 'assets/img/company_envion.png'
      },
      // {
      //   periods: {
      //     start: new Date('01 sep 2015'),
      //     end: new Date('01 aug 2016')
      //   },
      //   title: 'Freelance',
      //   content: 'Web Developer',
      //   imgPath: 'assets/img/company_freelancer.png'
      // },
      {
        periods: {
          start: new Date('01 apr 2007'),
          end: new Date('01 dec 2015')
        },
        title: 'S-engineering LLC',
        content: 'Head Of Engineering Department / TL Network Engineer',
        imgPath: 'assets/img/exp_logo_SEngineering.jpg'
      }
    ]

    
  }

}
