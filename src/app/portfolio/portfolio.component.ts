import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() { }
  public section;
  public portfolios;
  ngOnInit() {

    this.portfolios = [
      {
        name: 'mondeca.com',
        url: 'http://abap.envionsoftware.com',
        technologies: 'Angular, ES6, TypeScript, Webpack, HTML5, CSS3/Scss/Sass, Git',
        participation: 'Debugging, customization and functionality implementing at different components'
      },
      {
        name: 'envionsoftware.com',
        url: 'http://envionsoftware.com',
        technologies: 'HTML5, CSS3/Scss/Sass, JS, jQuery, Gulp, PHP, SQL, MySQL, CMS Wordpress, Git',
        participation: 'Everything from the scratch'
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
