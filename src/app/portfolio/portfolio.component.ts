import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() { }
  private section;
  private portfolios;
  ngOnInit() {

    this.portfolios = [
      {
        name: 'envionsoftware.com',
        url: 'http://envionsoftware.com',
        technologies: 'HTML5, CSS3, JS, jQuery, PHP, SQL, MySQL, CMS Wordpress',
        participation: 'Everything from the scratch'
      },
      {
        name: 'mondeca.com',
        url: 'http://abap.envionsoftware.com',
        technologies: 'Angular 4, TypeScript, Webpack, JS, HTML5, CSS3',
        participation: 'Debugging, customization and functionality implementing at different components'
      },
      {
        name: 'gallantra.com',
        url: 'http://gallantra.com',
        technologies: 'JS, jQuery, PHP, SQL, MySQL, CMS Wordpress',
        participation: 'Deployment and transfer website to the CMS, all BE works'
      }
    ]

    this.section = {
          name: 'Portfolio',
          icon: 'assets/img/section_portfolio.png'
      }
  }

}
